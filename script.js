const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');
const heroText = document.getElementById('hero-text');
const heroPhrase = 'Estudante de Engenharia de Software com formação técnica em T.I, focado na construção de sistemas eficientes, bem estruturados e escaláveis.';

// Fade In suave para o texto do hero
if (heroText) {
  heroText.textContent = heroPhrase;
  heroText.classList.add('hero-text-fade');
}

navLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      entry.target.style.animation = 'floatIn .9s ease-out forwards';
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.section').forEach(section => sectionObserver.observe(section));

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

const bubbles = document.createElement('div');
bubbles.className = 'bg-stars';
document.body.appendChild(bubbles);
