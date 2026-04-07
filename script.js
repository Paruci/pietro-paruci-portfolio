const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')
const navItems = document.querySelectorAll('.nav-links a')
const navbar = document.querySelector('.navbar')
const heroText = document.getElementById('hero-text')
const sections = document.querySelectorAll('.section')
const cards = document.querySelectorAll('.skill-card, .timeline-item, .experience-item, .language-item, .construction')

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')

    const expanded = navLinks.classList.contains('active')
    menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false')

    const icon = menuToggle.querySelector('i')
    if (icon) {
      icon.classList.toggle('fa-bars', !expanded)
      icon.classList.toggle('fa-times', expanded)
    }
  })

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active')
      menuToggle.setAttribute('aria-expanded', 'false')

      const icon = menuToggle.querySelector('i')
      if (icon) {
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-times')
      }
    })
  })
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('navbar-scrolled')
  } else {
    navbar.classList.remove('navbar-scrolled')
  }
})

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
  typeWriter()
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  },
  { threshold: 0.16 }
)

sections.forEach(section => {
  observer.observe(section)
})

cards.forEach((card, index) => {
  card.style.opacity = '0'
  card.style.transform = 'translateY(24px)'
  card.style.transition = `opacity 0.65s ease ${index * 0.03}s, transform 0.65s ease ${index * 0.03}s`
})

const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  },
  { threshold: 0.12 }
)

cards.forEach(card => {
  cardObserver.observe(card)
})

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10
  const y = (e.clientY / window.innerHeight - 0.5) * 10

  const heroTitle = document.querySelector('.hero h1')
  if (heroTitle && window.innerWidth > 768) {
    heroTitle.style.transform = `translate3d(${x * 0.4}px, ${y * 0.4}px, 0)`
  }
})