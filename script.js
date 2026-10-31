(() => {
  const html = document.documentElement;
  const langButton = document.getElementById('langSwitch');
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  let language = 'en';

  function setLanguage(next) {
    language = next;
    html.lang = next;
    html.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en][data-ar]').forEach((element) => {
      element.innerHTML = element.dataset[next];
    });
    document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach((element) => {
      element.placeholder = element.dataset[next === 'en' ? 'placeholderEn' : 'placeholderAr'];
    });
    langButton.textContent = next === 'en' ? 'عربي' : 'English';
    langButton.setAttribute('aria-label', next === 'en' ? 'Switch to Arabic' : 'Switch to English');
  }

  langButton.addEventListener('click', () => setLanguage(language === 'en' ? 'ar' : 'en'));
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));

  const config = window.ASTRAMIND_CONFIG || {};
  const email = config.email || 'astramind.club@example.com';
  const emailLink = document.getElementById('contactEmail');
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }
  document.querySelectorAll('[data-social]').forEach((link) => {
    const destination = config.social && config.social[link.dataset.social];
    if (destination) link.href = destination;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  // Local preview stores a demo submission in this browser only.
  // On Netlify, the native form POST is handled by Netlify Forms.
  const form = document.getElementById('membershipForm');
  const status = document.getElementById('formStatus');
  if (form && (window.location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(window.location.hostname))) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      const key = 'astramind-demo-membership-requests';
      const requests = JSON.parse(localStorage.getItem(key) || '[]');
      requests.push({ ...values, submittedAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(requests));
      status.textContent = language === 'ar'
        ? 'تم حفظ طلب تجريبي في هذا المتصفح فقط. لن يصل إلى إدارة النادي قبل ربط الموقع بخدمة استقبال الطلبات.'
        : 'Demo request saved in this browser only. It will not reach the club until the site is connected to a form service.';
      status.classList.add('is-success');
      form.reset();
    });
  }
})();
