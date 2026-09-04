// Lasagne Hub — shared behaviour. One file for every page.

// Scroll-reveal: sections fade/slide in as they enter the viewport.
// Skipped entirely for visitors who prefer reduced motion; degrades gracefully
// if IntersectionObserver is missing (everything just shows).
(function(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var selector = '.section-head, .card, .dish, .step, .quote, .service-block, .value, .occasion, .credibility .item, .faq-item, .promise, .final-cta, .review-banner, .custom-menu, .dietary, .tb-step, .review-card';
  var targets = Array.prototype.slice.call(document.querySelectorAll(selector));
  if(!targets.length) return;
  targets.forEach(function(el){ el.classList.add('reveal'); });
  if(!('IntersectionObserver' in window)){ targets.forEach(function(el){ el.classList.add('in'); }); return; }
  // Toggle .in every time an element enters/leaves the viewport, so the reveal
  // replays on the way up and on every scroll back down (not just the first time).
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ e.target.classList.toggle('in', e.isIntersecting); });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function(el){ io.observe(el); });
})();

// Mobile nav
(function(){
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if(toggle && links){
    toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
  }
})();

// Corporate / Private quote form toggle (two separate <form> elements — required for Netlify Forms detection)
(function(){
  var buttons = document.querySelectorAll('.toggle [data-form]');
  if(!buttons.length) return;
  buttons.forEach(function(b){
    b.addEventListener('click', function(){
      buttons.forEach(function(x){ x.classList.remove('active'); });
      b.classList.add('active');
      var corp = b.dataset.form === 'corporate';
      var corpForm = document.getElementById('formCorporate');
      var privForm = document.getElementById('formPrivate');
      if(corpForm) corpForm.style.display = corp ? 'block' : 'none';
      if(privForm) privForm.style.display = corp ? 'none' : 'block';
    });
  });
})();

// Menu choice (Lasagne / Tiramisù / Both) — show lasagne-specific dietary
// sub-fields only when lasagne is part of the order.
document.querySelectorAll('.menu-choice').forEach(function(group){
  var radios = group.querySelectorAll('input[type="radio"]');
  var subfields = group.closest('form').querySelector('.diet-subfields');
  if(!subfields) return;
  function update(){
    var checked = group.querySelector('input[type="radio"]:checked');
    var show = checked && checked.value !== 'Tiramisù';
    subfields.style.display = show ? 'block' : 'none';
  }
  radios.forEach(function(r){ r.addEventListener('change', update); });
  update();
});

// Interactive menu — flip cards (tap on touch devices) + dietary filter.
(function(){
  // On touch devices (no hover), tap a flip card to reveal its back.
  var touch = window.matchMedia && window.matchMedia('(hover: none)').matches;
  if(touch){
    document.querySelectorAll('.flip-card').forEach(function(card){
      card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
    });
  }
  // Dietary filter buttons
  var filterBtns = document.querySelectorAll('.filter-btn');
  if(filterBtns.length){
    var dishes = document.querySelectorAll('.menu-grid .dish');
    filterBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        filterBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        dishes.forEach(function(d){
          var diet = d.getAttribute('data-diet') || '';
          var show = (f === 'all') || (diet === f);
          d.classList.toggle('hide', !show);
        });
      });
    });
  }
})();

// Note: the EN/DA toggle is now a plain <a href> to the twin page (see hreflang
// tags in <head>), not a JS text-swap — Google indexes pages, not JS states.

// Cookie consent banner — Danish rules: Reject all must be as easy as Accept all,
// per-purpose consent, nothing non-essential loads before consent, reopenable from footer.
(function(){
  var STORAGE_KEY = 'lh_cookie_consent';
  var banner = document.getElementById('cookieBanner');
  var settings = document.getElementById('cookieSettings');
  if(!banner) return;

  function getConsent(){
    try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)); }catch(e){ return null; }
  }
  function setConsent(c){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    applyConsent(c);
    banner.classList.remove('show');
    if(settings) settings.classList.remove('show');
  }
  function applyConsent(c){
    // Statistics/analytics scripts are added later (Fase 8) and must read this flag
    // before loading — e.g. `if (JSON.parse(localStorage.getItem('lh_cookie_consent') || '{}').statistics) { ...load analytics... }`
    window.lhConsent = c;
  }

  var existing = getConsent();
  if(existing){ applyConsent(existing); }
  else { banner.classList.add('show'); }

  var acceptBtns = document.querySelectorAll('[data-cookie-accept]');
  var rejectBtns = document.querySelectorAll('[data-cookie-reject]');
  var customiseBtns = document.querySelectorAll('[data-cookie-customise]');
  var saveBtns = document.querySelectorAll('[data-cookie-save]');
  var reopenLinks = document.querySelectorAll('[data-cookie-reopen]');
  var statsToggle = document.getElementById('cookieStats');

  acceptBtns.forEach(function(b){ b.addEventListener('click', function(){ setConsent({necessary:true,statistics:true,marketing:false}); }); });
  rejectBtns.forEach(function(b){ b.addEventListener('click', function(){ setConsent({necessary:true,statistics:false,marketing:false}); }); });
  customiseBtns.forEach(function(b){ b.addEventListener('click', function(){ if(settings) settings.classList.toggle('show'); }); });
  saveBtns.forEach(function(b){ b.addEventListener('click', function(){
    setConsent({necessary:true, statistics: statsToggle ? statsToggle.checked : false, marketing:false});
  }); });
  reopenLinks.forEach(function(a){ a.addEventListener('click', function(e){
    e.preventDefault();
    var c = getConsent();
    if(statsToggle && c) statsToggle.checked = !!c.statistics;
    banner.classList.add('show');
    if(settings) settings.classList.add('show');
  }); });
})();

// Scrollytelling steps (Team Building) — the sticky photo cross-fades to match
// whichever step is crossing the middle of the viewport. On mobile / reduced-motion
// the sticky column is hidden by CSS and each step shows its own inline photo, so
// this observer simply has no visible effect there.
(function(){
  var scrolly = document.querySelector('.tb-scrolly');
  if(!scrolly || !('IntersectionObserver' in window)) return;
  var steps = scrolly.querySelectorAll('.tb-scrolly-step');
  var media = scrolly.querySelectorAll('.tb-scrolly-media img');
  if(!steps.length || !media.length) return;
  function activate(i){
    steps.forEach(function(s, k){ s.classList.toggle('active', k === i); });
    media.forEach(function(m, k){ m.classList.toggle('active', k === i); });
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ activate(parseInt(e.target.getAttribute('data-i'), 10) || 0); }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  steps.forEach(function(s){ io.observe(s); });
})();

// Google reviews (Team Building page) — fetches from the Netlify function so the
// API key stays server-side. If the function isn't configured (no env vars) or
// fails, the hardcoded fallback reviews already in the HTML are left in place.
(function(){
  var grid = document.getElementById('reviews-grid');
  if(!grid || !window.fetch) return;

  function stars(n){ n = Math.round(n||0); return '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n); }
  function el(tag, cls, text){ var e = document.createElement(tag); if(cls) e.className = cls; if(text!=null) e.textContent = text; return e; }

  fetch('/.netlify/functions/google-reviews').then(function(r){ return r.json(); }).then(function(data){
    if(!data || !data.configured || !data.reviews || !data.reviews.length) return; // keep fallback
    // rating summary
    var summary = document.getElementById('reviews-rating');
    if(summary && data.rating){
      summary.innerHTML = '';
      summary.appendChild(el('strong', null, Number(data.rating).toFixed(1) + ' '));
      summary.appendChild(el('span', 'stars', stars(data.rating)));
      if(data.total) summary.appendChild(el('span', null, '  ·  ' + data.total + ' Google reviews'));
    }
    // "see all" link
    var seeAll = document.getElementById('reviews-seeall');
    if(seeAll && data.url) seeAll.setAttribute('href', data.url);
    // replace cards with live reviews (max 6)
    grid.innerHTML = '';
    data.reviews.slice(0, 6).forEach(function(rv){
      var card = el('div', 'review-card');
      var head = el('div', 'review-head');
      if(rv.avatar){ var img = el('img', 'review-avatar'); img.src = rv.avatar; img.alt = ''; img.loading = 'lazy'; head.appendChild(img); }
      else { var ph = el('div', 'review-avatar ph', (rv.author||'?').charAt(0)); head.appendChild(ph); }
      var meta = el('div');
      meta.appendChild(el('div', 'review-name', rv.author || 'Google user'));
      if(rv.relative) meta.appendChild(el('div', 'review-date', rv.relative));
      head.appendChild(meta);
      card.appendChild(head);
      card.appendChild(el('div', 'review-stars', stars(rv.rating)));
      card.appendChild(el('p', 'review-text', rv.text || ''));
      grid.appendChild(card);
    });
  }).catch(function(){ /* keep fallback reviews */ });
})();
