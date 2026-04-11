const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')
const navItems = document.querySelectorAll('.nav-links a')
const navbar = document.querySelector('.navbar')
const heroText = document.getElementById('hero-text')
const sections = document.querySelectorAll('.section')
const cards = document.querySelectorAll('.skill-card, .timeline-item, .experience-item, .language-item, .construction')

function closeMenu() {
  navLinks.classList.remove('active')
  menuToggle.setAttribute('aria-expanded', 'false')
  menuToggle.setAttribute('aria-label', 'Abrir menu')
  const icon = menuToggle.querySelector('i')
  if (icon) {
    icon.classList.replace('fa-times', 'fa-bars')
  }
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = navLinks.classList.toggle('active')
    menuToggle.setAttribute('aria-expanded', String(expanded))
    menuToggle.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu')
    const icon = menuToggle.querySelector('i')
    if (icon) {
      icon.classList.toggle('fa-bars', !expanded)
      icon.classList.toggle('fa-times', expanded)
    }
  })

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(closeMenu, 150)
    })
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu()
      menuToggle.focus()
    }
  })
}

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar-scrolled', window.scrollY > 20)
}, { passive: true })

const text =
  'Estudante de Engenharia de Software focado em criar soluções eficientes, escaláveis e com ótima experiência para o usuário.'

if (heroText) {
  let index = 0
  function typeWriter() {
    if (index < text.length) {
      heroText.textContent += text.charAt(index)
      index++
      setTimeout(typeWriter, 26)
    }
  }
  setTimeout(typeWriter, 1300)
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.16 }
)

sections.forEach(section => observer.observe(section))

cards.forEach((card, index) => {
  card.style.cssText = `opacity:0; transform:translateY(24px); transition:opacity 0.65s ease ${index * 0.03}s, transform 0.65s ease ${index * 0.03}s`
})

const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        cardObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

cards.forEach(card => cardObserver.observe(card))

document.addEventListener('mousemove', e => {
  if (window.innerWidth <= 768) return
  const x = (e.clientX / window.innerWidth - 0.5) * 10
  const y = (e.clientY / window.innerHeight - 0.5) * 10
  const heroTitle = document.querySelector('.hero h1')
  if (heroTitle) {
    heroTitle.style.transform = `translate3d(${x * 0.4}px, ${y * 0.4}px, 0)`
  }
})