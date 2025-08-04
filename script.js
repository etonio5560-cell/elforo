// Toggle dropdown submenu con animación
document.querySelectorAll('.dropdown > a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const menu = anchor.nextElementSibling;
    if (menu.style.display === 'block') {
      menu.style.opacity = '0';
      setTimeout(() => {
        menu.style.display = 'none';
      }, 200);
    } else {
      menu.style.display = 'block';
      setTimeout(() => {
        menu.style.opacity = '1';
      }, 10);
    }
  });
});

// Close dropdown if click outside
window.addEventListener('click', e => {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (!menu.parentElement.contains(e.target)) {
      menu.style.opacity = '0';
      setTimeout(() => {
        menu.style.display = 'none';
      }, 200);
    }
  });
});

// Mobile burger toggle mejorado
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
burger.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-active');
  burger.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

// Animación de scroll mejorada
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
    });
  },
  { 
    threshold: 0.2,
    rootMargin: '0px'
  }
);

// Aplicar animaciones a elementos glass
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});
