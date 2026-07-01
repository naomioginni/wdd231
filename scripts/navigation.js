// navigation.js
// Handles the responsive hamburger menu toggle on small screens.

const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

menuToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu automatically if the viewport grows past the
// large-screen breakpoint (keeps state consistent on resize).
const mediaQuery = window.matchMedia('(min-width: 700px)');
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    primaryNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }
});
