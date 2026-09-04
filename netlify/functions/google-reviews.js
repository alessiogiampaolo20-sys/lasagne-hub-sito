// Netlify serverless function — returns Google reviews to the frontend so the
// API key is NEVER exposed in the browser.
//
// SETUP (do this in Netlify → Site configuration → Environment variables):
//   GOOGLE_PLACES_API_KEY  = <your Google Places API key>
//   GOOGLE_PLACE_ID        = <the Place ID of the Lasagne Hub Google listing>
//
// How to get them:
//   - API key: Google Cloud Console → enable "Places API" → create an API key.
//   - Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
//
// Until both are set, this returns { configured:false } and the Team Building
// page shows its built-in fallback reviews instead. No key = no crash.

// Warm-instance cache (Netlify keeps a function warm for a while between calls).
let cache = { at: 0, data: null };
const TTL = 1000 * 60 * 60 * 4; // 4 hours

exports.handler = async function () {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const headers = {
    'Content-Type': 'application/json',
    // let the browser / CDN cache for 4h to stay within Google quota
    'Cache-Control': 'public, max-age=14400',
  };

  if (!key || !placeId) {
    return { statusCode: 200, headers, body: JSON.stringify({ configured: false }) };
  }

  if (cache.data && Date.now() - cache.at < TTL) {
    return { statusCode: 200, headers, body: JSON.stringify(cache.data) };
  }

  try {
    const url =
      'https://maps.googleapis.com/maps/api/place/details/json' +
      '?place_id=' + encodeURIComponent(placeId) +
      '&fields=reviews,rating,user_ratings_total,url' +
      '&reviews_sort=newest&language=en&key=' + encodeURIComponent(key);

    const res = await fetch(url);
    const json = await res.json();

    if (json.status !== 'OK') {
      return { statusCode: 200, headers, body: JSON.stringify({ configured: true, error: json.status || 'error' }) };
    }

    const r = json.result || {};
    const data = {
      configured: true,
      rating: r.rating || null,
      total: r.user_ratings_total || null,
      url: r.url || null,
      reviews: (r.reviews || []).map(function (rv) {
        return {
          author: rv.author_name,
          avatar: rv.profile_photo_url,
          rating: rv.rating,
          text: rv.text,
          relative: rv.relative_time_description,
          time: rv.time,
        };
      }),
    };

    cache = { at: Date.now(), data: data };
    return { statusCode: 200, headers, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 200, headers, body: JSON.stringify({ configured: true, error: 'fetch_failed' }) };
  }
};
