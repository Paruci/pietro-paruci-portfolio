const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');
const heroText = document.getElementById('hero-text');
const sections = document.querySelectorAll('.section');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const expanded = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');

    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars', !expanded);
      icon.classList.toggle('fa-times', expanded);
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');

      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

const text =
  'Estudante de Engenharia de Software focado em criar soluções eficientes, escaláveis e com ótima experiência para o usuário.';

if (heroText) {
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      heroText.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 28);
    }
  }
  typeWriter();
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  observer.observe(section);
});