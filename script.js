/* ============================================================
   INNSET SOLUTIONS — script.js
   ============================================================ */


/* ============================================================
   TRANSLATIONS
   Norwegian = full Nynorsk (default). English = toggle.
   Keys match data-i18n attributes in index.html.
   ============================================================ */
const translations = {

  no: {
    /* Navbar */
    'nav.services':           'Tenester',
    'nav.about':              'Om meg',
    'nav.contact':            'Kontakt',

    /* Hero */
    'hero.title':             'Digitale løysingar for di verksemd',
    'hero.subtitle':          'Eg byggjer det digitale, du fokuserer på verksemda di.',
    'hero.cta1':              'Ta kontakt',
    'hero.cta2':              'Sjå tenester',

    /* Services */
    'services.label':           'TENESTER',
    'services.title':           'Kva kan eg hjelpe deg med?',
    'services.web.title':       'Nettside',
    'services.web.desc':        'Skreddarsydd nettside tilpassa di verksemd. Moderne design, rask og enkel å bruke.',
    'services.booking.title':   'Bookingsystem',
    'services.booking.desc':    'Integrert bookingløysing så kundane dine kan bestille direkte på nettsida di.',
    'services.hosting.title':   'Hosting',
    'services.hosting.desc':    'Rask og sikker hosting. Eg tek meg av det tekniske så du slepp å tenke på det.',
    'services.maps.title':      'Digitale kart & visuals',
    'services.maps.desc':       'Interaktive kart og visuelle løysingar tilpassa di verksemd.',
    'services.chatbot.title':   'Chatbot',
    'services.chatbot.desc':    'AI-dreven chatbot som svarar kundane dine døgnet rundt.',
    'services.seo.title':       'SEO',
    'services.seo.desc':        'Bli funnen på Google av dei rette kundane.',

    /* Process */
    'process.label':          'PROSESS',
    'process.title':          'Slik fungerer det',
    'process.step1.title':    'Uforpliktande demo',
    'process.step1.desc':     'Eg lagar ein gratis demo av ei digital løysing for verksemda di. Ingen binding, ingen kostnad.',
    'process.step2.title':    'Tilpassing',
    'process.step2.desc':     'Me justerer design, innhald og funksjonar til det passar di verksemd perfekt.',
    'process.step3.title':    'Lansering',
    'process.step3.desc':     'Nettsida blir publisert med ditt domene og alle integrasjonar på plass.',
    'process.step4.title':    'Du vel sjølv',
    'process.step4.desc':     'Vil du styre alt sjølv, eller vil du at eg held det ved like? Me finn den løysinga som passar deg.',

    /* About */
    'about.label':  'OM MEG',
    'about.title':  'Kven er eg?',
    'about.p1':     'Eg heiter Vegard Innset, er 22 år og kjem frå Ulvik i Hardanger. For tida studerer eg kunstig intelligens i Barcelona.',
    'about.p2':     'Innset Solutions er ein soloverksemd. Det er meg du snakkar med, og det er meg som byggjer nettsida di. Eg brukar moderne verktøy og AI for å levere arbeid som tidlegare kravde eit heilt byrå — raskare, billegare og meir personleg.',
    'about.p3':     'Eg trur på ærleg kommunikasjon. Du får tett oppfølging, klare prisar, og eit produkt du eig sjølv etter overlevering. Ingen abonnement du ikkje forstår. Inga binding.',
    'about.p4':     'Hovudfokuset mitt er campingplassar og reiselivsbedrifter, men eg hjelper alle typar verksemder med å etablere seg digitalt.',
    'about.stat1.value': '22',
    'about.stat1.label': 'ÅR GAMAL',
    'about.stat2.value': '100%',
    'about.stat2.label': 'SOLO · INGEN BYRÅ',
    'about.stat3.value': 'NO',
    'about.stat3.label': 'NORSK KVALITET',

    /* Contact */
    'contact.label':          'KONTAKT',
    'contact.title':          'Ta kontakt',
    'contact.subtitle':       'Ingen binding. Eg svarar innan 24 timar.',
    'contact.form.name':      'Namn',
    'contact.form.email':     'E-post',
    'contact.form.business':  'Verksemd',
    'contact.form.optional':  '(valfritt)',
    'contact.form.message':   'Melding',
    'contact.form.submit':    'Send melding',
    'contact.form.success':   'Takk for meldinga! Eg svarar deg innan 24 timar.',

    /* Footer */
    'footer.copy':            '© 2026 Innset Solutions — Ulvik, Hardanger',

    /* Detail sections */
    'detail.cta':                   'Ta kontakt',

    'detail.web.label':              'NETTSIDE',
    'detail.web.title':              'Ei nettside som jobbar for deg',
    'detail.web.intro':              'Eg lagar ei skreddarsydd nettside tilpassa di verksemd — uansett bransje. Moderne design, mobilvennleg og enkel å oppdatere sjølv.',
    'detail.web.feat1':              'Skreddarsydd design',
    'detail.web.feat2':              'Bookingsystem',
    'detail.web.feat3':              'Betalingsløysing (Stripe)',
    'detail.web.feat4':              'Chatbot',
    'detail.web.feat5':              'Digitale kart',
    'detail.web.feat6':              'SEO-optimalisering',
    'detail.web.feat7':              'Fleirspråkleg støtte',

    'detail.maintenance.label':      'VEDLIKEHALD & DRIFT',
    'detail.maintenance.title':      'Eg held det ved like for deg',
    'detail.maintenance.intro':      'Vil du heller fokusere på verksemda di? Eg tek meg av oppdateringar, innhald, sikkerheit og drift — du slepp å tenke på det tekniske.',
    'detail.maintenance.feat1':      'Løpande oppdateringar',
    'detail.maintenance.feat2':      'Innhaldsoppdateringar',
    'detail.maintenance.feat3':      'Sikkerheit og backup',
    'detail.maintenance.feat4':      'Teknisk support',
    'detail.maintenance.feat5':      'Månedleg rapport',
  },

  en: {
    /* Navbar */
    'nav.services':           'Services',
    'nav.about':              'About',
    'nav.contact':            'Contact',

    /* Hero */
    'hero.title':             'Digital solutions for your business',
    'hero.subtitle':          'I build the digital, you focus on your business.',
    'hero.cta1':              'Get in touch',
    'hero.cta2':              'See services',

    /* Services */
    'services.label':           'SERVICES',
    'services.title':           'How can I help you?',
    'services.web.title':       'Website',
    'services.web.desc':        'Custom website tailored to your business. Modern design, fast and easy to use.',
    'services.booking.title':   'Booking system',
    'services.booking.desc':    'Integrated booking solution so your customers can book directly on your website.',
    'services.hosting.title':   'Hosting',
    'services.hosting.desc':    'Fast and secure hosting. I handle all the technical details so you don\'t have to.',
    'services.maps.title':      'Digital maps & visuals',
    'services.maps.desc':       'Interactive maps and visual solutions tailored to your business.',
    'services.chatbot.title':   'Chatbot',
    'services.chatbot.desc':    'AI-powered chatbot that answers your customers around the clock.',
    'services.seo.title':       'SEO',
    'services.seo.desc':        'Get found on Google by the right customers.',

    /* Process */
    'process.label':          'PROCESS',
    'process.title':          'How it works',
    'process.step1.title':    'Free demo',
    'process.step1.desc':     'I build a free demo of a digital solution for your business. No commitment, no cost.',
    'process.step2.title':    'Customisation',
    'process.step2.desc':     'We adjust design, content and features until it fits your business perfectly.',
    'process.step3.title':    'Launch',
    'process.step3.desc':     'Your website goes live with your domain and all integrations in place.',
    'process.step4.title':    'You choose',
    'process.step4.desc':     'Do you want to manage everything yourself, or would you like me to maintain it? We find the solution that suits you.',

    /* About */
    'about.label':  'ABOUT ME',
    'about.title':  'Who am I?',
    'about.p1':     "My name is Vegard Innset, I'm 22 years old and from Ulvik in Hardanger, Norway. I'm currently studying Artificial Intelligence in Barcelona.",
    'about.p2':     "Innset Solutions is a solo operation. You talk to me, and I'm the one who builds your website. I use modern tools and AI to deliver work that previously required an entire agency — faster, more affordable, and more personal.",
    'about.p3':     "I believe in honest communication. You get close follow-up, clear pricing, and a product you own outright after handover. No subscriptions you don't understand. No lock-in.",
    'about.p4':     'My main focus is campsites and travel businesses, but I help all types of businesses establish themselves digitally.',
    'about.stat1.value': '22',
    'about.stat1.label': 'YEARS OLD',
    'about.stat2.value': '100%',
    'about.stat2.label': 'SOLO · NO AGENCY',
    'about.stat3.value': 'NO',
    'about.stat3.label': 'NORWEGIAN QUALITY',

    /* Contact */
    'contact.label':          'CONTACT',
    'contact.title':          'Get in touch',
    'contact.subtitle':       'No commitment. I respond within 24 hours.',
    'contact.form.name':      'Name',
    'contact.form.email':     'Email',
    'contact.form.business':  'Business',
    'contact.form.optional':  '(optional)',
    'contact.form.message':   'Message',
    'contact.form.submit':    'Send message',
    'contact.form.success':   "Thanks for your message! I'll get back to you within 24 hours.",

    /* Footer */
    'footer.copy':            '© 2026 Innset Solutions — Ulvik, Hardanger',

    /* Detail sections */
    'detail.cta':                   'Get in touch',

    'detail.web.label':              'WEBSITE',
    'detail.web.title':              'A website that works for you',
    'detail.web.intro':              'I build a custom website tailored to your business — regardless of industry. Modern design, mobile-friendly and easy to update yourself.',
    'detail.web.feat1':              'Custom design',
    'detail.web.feat2':              'Booking system',
    'detail.web.feat3':              'Payment solution (Stripe)',
    'detail.web.feat4':              'Chatbot',
    'detail.web.feat5':              'Digital maps',
    'detail.web.feat6':              'SEO optimisation',
    'detail.web.feat7':              'Multilingual support',

    'detail.maintenance.label':      'MAINTENANCE & HOSTING',
    'detail.maintenance.title':      'I keep it running for you',
    'detail.maintenance.intro':      'Want to focus on your business instead? I handle updates, content, security and hosting — you don\'t have to think about the technical side.',
    'detail.maintenance.feat1':      'Ongoing updates',
    'detail.maintenance.feat2':      'Content updates',
    'detail.maintenance.feat3':      'Security and backup',
    'detail.maintenance.feat4':      'Technical support',
    'detail.maintenance.feat5':      'Monthly report',
  },

};


/* ============================================================
   STATE
   ============================================================ */
let currentLang = 'no';


/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = translations[lang][el.getAttribute('data-i18n')];
    if (text !== undefined) el.textContent = text;
  });

  document.getElementById('langNo').classList.toggle('active', lang === 'no');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang === 'no' ? 'no' : 'en';
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'no' ? 'en' : 'no');
});


/* ============================================================
   NAVBAR — scroll effect
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });


/* ============================================================
   MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  hamburger.setAttribute('aria-label', isOpen ? 'Lukk meny' : 'Opne meny');
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Opne meny');
  });
});

document.addEventListener('click', e => {
  if (
    navMenu.classList.contains('open') &&
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});


/* ============================================================
   INTERSECTION OBSERVER — fade-in on scroll
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


/* ============================================================
   CONTACT FORM
   (replace the setTimeout with a real fetch() to your backend
    or a service like Formspree when you go live)
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formSubmit  = document.getElementById('formSubmit');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }

  formSubmit.disabled = true;
  formSubmit.textContent = '…';

  setTimeout(() => {
    contactForm.reset();
    formSuccess.textContent = translations[currentLang]['contact.form.success'];
    formSuccess.classList.add('show');
    formSubmit.disabled = false;
    formSubmit.textContent = translations[currentLang]['contact.form.submit'];
    setTimeout(() => formSuccess.classList.remove('show'), 6000);
  }, 900);
});


/* ============================================================
   SMOOTH SCROLL — JS fallback for older Safari
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
