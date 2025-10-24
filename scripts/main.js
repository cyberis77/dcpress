// main.js - tiny interactive helpers

// Mobile menu toggle
const mobileOpen = document.getElementById('mobile-open');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileOpen && mobileMenu) {
  mobileOpen.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileOpen.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
  });
}

// smooth in-page scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});
