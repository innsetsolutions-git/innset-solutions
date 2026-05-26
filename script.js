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
    'services.web.desc':        'Skreddarsydd nettside som ser profesjonell ut og er enkel å oppdatere sjølv',
    'services.booking.title':   'Bookingsystem',
    'services.booking.desc':    'Integrert bookingløysing så kundane dine kan bestille direkte på nettsida',
    'services.payment.title':   'Betalingsløysing',
    'services.payment.desc':    'Stripe-integrasjon for sikker og enkel betaling på nett',
    'services.logo.title':      'Logo & grafisk profil',
    'services.logo.desc':       'Profesjonell visuell identitet som speglar verksemda di',
    'services.seo.title':       'SEO',
    'services.seo.desc':        'Bli funnen på Google av dei rette kundane',
    'services.hosting.title':   'Hosting',
    'services.hosting.desc':    'Rask og sikker hosting, eg tek meg av det tekniske',
    'services.chatbot.title':   'Chatbot',
    'services.chatbot.desc':    'AI-dreven chatbot som svarar kundane dine døgnet rundt',
    'services.social.title':    'Sosiale medier',
    'services.social.desc':     'Innhald og annonsering på Meta, TikTok og e-post',
    'services.maps.title':      'Digitale kart & visuals',
    'services.maps.desc':       'Interaktive kart og visuals tilpassa di verksemd',

    /* Process */
    'process.label':          'PROSESS',
    'process.title':          'Slik fungerer det',
    'process.step1.title':    'Uforpliktande demo',
    'process.step1.desc':     'Eg lagar ein gratis demo av nettsida di. Ingen binding.',
    'process.step2.title':    'Tilpassing',
    'process.step2.desc':     'Me justerer design, tekst og innhald til det passar din campingplass.',
    'process.step3.title':    'Lansering',
    'process.step3.desc':     'Nettsida blir publisert med ditt domene og bookingsystem på plass.',
    'process.step4.title':    'Du styrer sjølv',
    'process.step4.desc':     'Du får full kontroll og kan oppdatere innhald sjølv når du vil.',

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
    'about.stat3.value': '24t',
    'about.stat3.label': 'SVAR GARANTERT',

    /* Contact */
    'contact.label':          'KONTAKT',
    'contact.title':          'Ta kontakt',
    'contact.subtitle':       'Ingen binding. Eg svarar innan 24 timar.',
    'contact.form.name':      'Namn',
    'contact.form.email':     'E-post',
    'contact.form.campsite':  'Campingplass',
    'contact.form.optional':  '(valfritt)',
    'contact.form.message':   'Melding',
    'contact.form.submit':    'Send melding',
    'contact.form.success':   'Takk for meldinga! Eg svarar deg innan 24 timar.',

    /* Footer */
    'footer.copy':            '© 2026 Innset Solutions — Ulvik, Hardanger',

    /* Detail sections */
    'detail.cta':                   'Ta kontakt',

    'detail.web.label':             'NETTSIDE',
    'detail.web.title':             'Di eiga nettside, skreddarsydd',
    'detail.web.intro':             'Eg lagar ei nettside som speglar campingplassen din — frå design til innhald. Du slepp å tenke på det tekniske.',
    'detail.web.feat1':             'Unikt design tilpassa din campingplass',
    'detail.web.feat2':             'Fullstendig mobilvennleg (responsivt)',
    'detail.web.feat3':             'Enkelt administrasjonspanel — du oppdaterer sjølv',
    'detail.web.feat4':             'Rask lastetid og SSL-sikra',
    'detail.web.feat5':             'SEO-optimert — gjestene finn deg på Google',
    'detail.web.feat6':             'Ditt domenenamn inkludert',

    'detail.booking.label':         'BOOKINGSYSTEM',
    'detail.booking.title':         'Direkte booking, utan mellomledd',
    'detail.booking.intro':         'Gjestene dine bestiller direkte på nettsida di — ingen tredjepartstenester, ingen provisjon.',
    'detail.booking.feat1':         'Bestilling direkte frå nettsida di',
    'detail.booking.feat2':         'Online betaling via Stripe',
    'detail.booking.feat3':         'Fungerer på mobil, nettbrett og PC',
    'detail.booking.feat4':         'Enkel administrasjon av alle reservasjonar',
    'detail.booking.feat5':         'Automatiske bekreftelses-e-postar til gjestene',

    'detail.package.badge':         'ANBEFALT',
    'detail.package.label':         'DIGITAL PAKKE',
    'detail.package.title':         'Alt du treng, i éi løysing',
    'detail.package.intro':         'Den komplette digitale løysinga for campingplassen din — nettside og booking saman, til ein betre pris.',
    'detail.package.feat1':         'Alt frå nettsidepakken inkludert',
    'detail.package.feat2':         'Alt frå bookingsystemet inkludert',
    'detail.package.feat3':         'Éin leverandør for alt digitalt',
    'detail.package.feat4':         'Betre totalpris enn å kjøpe kvar for seg',
    'detail.package.feat5':         'Prioritert hjelp og support',
    'detail.package.feat6':         'Klar for drift frå første dag',
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
    'services.web.desc':        'Custom website that looks professional and is easy to update yourself',
    'services.booking.title':   'Booking system',
    'services.booking.desc':    'Integrated booking solution so your customers can book directly on your website',
    'services.payment.title':   'Payment solution',
    'services.payment.desc':    'Stripe integration for secure and simple online payments',
    'services.logo.title':      'Logo & visual identity',
    'services.logo.desc':       'Professional visual identity that reflects your business',
    'services.seo.title':       'SEO',
    'services.seo.desc':        'Get found on Google by the right customers',
    'services.hosting.title':   'Hosting',
    'services.hosting.desc':    'Fast and secure hosting — I handle all the technical details',
    'services.chatbot.title':   'Chatbot',
    'services.chatbot.desc':    'AI-powered chatbot that answers your customers around the clock',
    'services.social.title':    'Social media',
    'services.social.desc':     'Content and advertising on Meta, TikTok and email',
    'services.maps.title':      'Digital maps & visuals',
    'services.maps.desc':       'Interactive maps and visuals tailored to your business',

    /* Process */
    'process.label':          'PROCESS',
    'process.title':          'How it works',
    'process.step1.title':    'Free demo',
    'process.step1.desc':     'I build a free demo of your website. No commitment.',
    'process.step2.title':    'Customisation',
    'process.step2.desc':     'We adjust the design, text, and content to fit your campsite.',
    'process.step3.title':    'Launch',
    'process.step3.desc':     'Your website goes live with your domain and booking system in place.',
    'process.step4.title':    'You stay in control',
    'process.step4.desc':     'You get full control and can update content yourself whenever you like.',

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
    'about.stat3.value': '24h',
    'about.stat3.label': 'REPLY GUARANTEED',

    /* Contact */
    'contact.label':          'CONTACT',
    'contact.title':          'Get in touch',
    'contact.subtitle':       'No commitment. I respond within 24 hours.',
    'contact.form.name':      'Name',
    'contact.form.email':     'Email',
    'contact.form.campsite':  'Campsite',
    'contact.form.optional':  '(optional)',
    'contact.form.message':   'Message',
    'contact.form.submit':    'Send message',
    'contact.form.success':   "Thanks for your message! I'll get back to you within 24 hours.",

    /* Footer */
    'footer.copy':            '© 2026 Innset Solutions — Ulvik, Hardanger',

    /* Detail sections */
    'detail.cta':                   'Get in touch',

    'detail.web.label':             'WEBSITE',
    'detail.web.title':             'Your own website, tailored to you',
    'detail.web.intro':             'I build a website that reflects your campsite — from design to content. No technical knowledge required on your part.',
    'detail.web.feat1':             'Unique design tailored to your campsite',
    'detail.web.feat2':             'Fully mobile responsive',
    'detail.web.feat3':             'Simple content management — update it yourself',
    'detail.web.feat4':             'Fast loading and SSL secured',
    'detail.web.feat5':             'SEO optimised — guests find you on Google',
    'detail.web.feat6':             'Your domain name included',

    'detail.booking.label':         'BOOKING SYSTEM',
    'detail.booking.title':         'Direct booking, no middlemen',
    'detail.booking.intro':         'Your guests book directly on your website — no third-party platforms, no commission fees.',
    'detail.booking.feat1':         'Bookings directly through your website',
    'detail.booking.feat2':         'Online payments via Stripe',
    'detail.booking.feat3':         'Works on mobile, tablet, and desktop',
    'detail.booking.feat4':         'Simple management of all reservations',
    'detail.booking.feat5':         'Automatic confirmation emails to guests',

    'detail.package.badge':         'RECOMMENDED',
    'detail.package.label':         'DIGITAL PACKAGE',
    'detail.package.title':         'Everything you need, in one solution',
    'detail.package.intro':         'The complete digital solution for your campsite — website and booking together, at a better price.',
    'detail.package.feat1':         'Everything from the website package included',
    'detail.package.feat2':         'Everything from the booking system included',
    'detail.package.feat3':         'One point of contact for everything digital',
    'detail.package.feat4':         'Better total price than buying separately',
    'detail.package.feat5':         'Priority help and support',
    'detail.package.feat6':         'Ready to go from day one',
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
