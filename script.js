'use strict';

// język zapisany w localStorage żeby przeżył odświeżenie strony
let currentLang = localStorage.getItem('polina-lang') || 'pl';

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('polina-lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `btn-${lang}`);
  });

  // innerHTML zamiast textContent bo tłumaczenia mogą zawierać <br> i <em>
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = translations[lang][el.getAttribute('data-i18n')];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const val = translations[lang][el.getAttribute('data-i18n-opt')];
    if (val) el.textContent = val;
  });

  document.documentElement.lang = lang === 'ru' ? 'ru' : 'pl';

  if (lang === 'ru') {
    document.title = 'Полина — Персональный стилист';
    document.querySelector('meta[name="description"]').content =
      'Полина — персональный стилист. Индивидуальный стиль, шопинг и консультации.';
  } else {
    document.title = 'Polina — Personal Stylist';
    document.querySelector('meta[name="description"]').content =
      'Polina — osobista stylistka. Profesjonalne usługi stylizacji dla kobiet i mężczyzn.';
  }
}

// --- SIDE NAV ---
const sideNav    = document.getElementById('side-nav');
const navOverlay = document.getElementById('nav-overlay');
const hamburger  = document.getElementById('hamburger-btn');
let navOpen = false;

function toggleNav() {
  navOpen = !navOpen;
  sideNav.classList.toggle('open', navOpen);
  navOverlay.classList.toggle('open', navOpen);
  hamburger.setAttribute('aria-expanded', String(navOpen));
  sideNav.setAttribute('aria-hidden', String(!navOpen));
  // blokuj scroll strony gdy menu otwarte
  document.body.style.overflow = navOpen ? 'hidden' : '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navOpen) toggleNav();
});

// --- KARUZELA ---
let carouselIndex = 0;
const track = document.getElementById('carousel-track');
const dotsContainer = document.getElementById('carousel-dots');

function initCarousel() {
  if (!track) return;
  const count = track.children.length;

  // generuj kropki dynamicznie żeby zgadzały się z liczbą kart
  dotsContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Przejdź do opinii ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  goToSlide(0);

  // auto-przewijanie, zatrzymuje się na hover
  let autoTimer = setInterval(() => carousel(1), 6000);
  track.closest('.carousel').addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.closest('.carousel').addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => carousel(1), 6000);
  });
}

function goToSlide(idx) {
  const count = track.children.length;
  carouselIndex = (idx + count) % count; // modulo żeby zapętlić
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;

  document.querySelectorAll('.carousel__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselIndex);
    dot.setAttribute('aria-label', `Przejdź do opinii ${i + 1}${i === carouselIndex ? ' (aktywna)' : ''}`);
  });
}

function carousel(dir) { goToSlide(carouselIndex + dir); }

// obsługa swipe na telefonach
let touchStartX = 0;
if (track) {
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) carousel(diff > 0 ? 1 : -1);
  });
}

// --- FORMULARZ ---
function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  let valid = true;

  form.querySelectorAll('.form-field').forEach(f => f.classList.remove('has-error'));
  form.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));

  const name = form.querySelector('#f-name');
  if (!name.value.trim()) { markError(name); valid = false; }

  const email = form.querySelector('#f-email');
  if (!email.value.trim() || !isValidEmail(email.value)) { markError(email); valid = false; }

  const service = form.querySelector('#f-service');
  if (!service.value) { markError(service); valid = false; }

  if (!valid) return;

  const btn = document.getElementById('form-submit-btn');
  btn.disabled = true;
  btn.textContent = '…';

  // dane przekazywane do szablonu EmailJS
  // nazwy zmiennych muszą zgadzać się z {{zmienną}} w szablonie na emailjs.com
  const templateParams = {
    from_name:    name.value.trim(),
    from_email:   email.value.trim(),
    instagram:    form.querySelector('#f-instagram').value.trim() || '—',
    service_type: service.options[service.selectedIndex].text,
  };

  emailjs.send(
    CONFIG.emailjs_service_id,
    CONFIG.emailjs_template_id,
    templateParams
  ).then(() => {
    form.reset();
    btn.disabled = false;
    btn.setAttribute('data-i18n', 'form_submit');
    btn.textContent = translations[currentLang]['form_submit'];

    const successEl = document.getElementById('form-success');
    successEl.textContent = translations[currentLang]['form_success'];
    successEl.classList.add('visible');
    setTimeout(() => successEl.classList.remove('visible'), 5000);

  }).catch((err) => {
    console.error('EmailJS error:', err);
    btn.disabled = false;
    btn.textContent = translations[currentLang]['form_submit'];
    alert('Błąd wysyłki. Sprawdź config.js i klucze EmailJS.');
  });
}

function markError(input) {
  input.classList.add('error');
  input.closest('.form-field').classList.add('has-error');
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

// czyść błąd od razu gdy użytkownik zaczyna pisać
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    input.closest('.form-field').classList.remove('has-error');
  });
});

// --- SCROLL REVEAL ---
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.service-card, .collab-card, .section-header, .chat-section__text, .chat-section__deco'
  );
  targets.forEach(el => el.classList.add('reveal'));

  // IntersectionObserver zamiast scroll event - wydajniejszy
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target); // unobserve żeby nie powtarzać
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => io.observe(el));
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  // inicjalizacja EmailJS - public key z config.js
  if (typeof emailjs !== 'undefined' && CONFIG?.emailjs_public_key) {
    emailjs.init({ publicKey: CONFIG.emailjs_public_key });
  }

  setLang(currentLang);
  initCarousel();
  initScrollReveal();
});
