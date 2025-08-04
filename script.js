// Toggle dropdown submenu
document.querySelectorAll('.dropdown > a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const menu = anchor.nextElementSibling;
    menu.style.display =
      menu.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdown if click outside
window.addEventListener('click', e => {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (!menu.parentElement.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});

// Mobile burger toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
burger.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-active');
  burger.classList.toggle('open');
});

// Smooth reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.glass').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
