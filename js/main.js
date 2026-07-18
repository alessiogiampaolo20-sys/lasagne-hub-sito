// Lasagne Hub — shared behaviour. One file for every page.

// Scroll-reveal: sections fade/slide in as they enter the viewport.
// Skipped entirely for visitors who prefer reduced motion; degrades gracefully
// if IntersectionObserver is missing (everything just shows).
(function(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var selector = '.section-head, .card, .dish, .step, .quote, .service-block, .value, .occasion, .credibility .item, .faq-item, .promise, .final-cta, .review-banner, .custom-menu, .dietary';
  var targets = Array.prototype.slice.call(document.querySelectorAll(selector));
  if(!targets.length) return;
  targets.forEach(function(el){ el.classList.add('reveal'); });
  if(!('IntersectionObserver' in window)){ targets.forEach(function(el){ el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
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
