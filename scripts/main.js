// main.js

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link inside it is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }


  // --- Dynamic Copyright Year ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  // --- Animate on Scroll using Intersection Observer ---
  const animatedElements = document.querySelectorAll('[data-animate]');

  // Prepare elements for animation by adding the starting class
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'is-visible' class to trigger the animation
        entry.target.classList.add('is-visible');
        // Stop observing the element after it has animated in
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Start observing each animated element
  animatedElements.forEach(el => {
    observer.observe(el);
  });

});
