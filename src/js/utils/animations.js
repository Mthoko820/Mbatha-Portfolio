export function initAnimations() {
  // Initialize Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        
        // Trigger counter animations for stats
        if (entry.target.classList.contains('stat-number')) {
          animateCounter(entry.target)
        }
        
        // Trigger skill bar animations
        if (entry.target.classList.contains('skill-progress')) {
          animateSkillBar(entry.target)
        }
      }
    })
  }, observerOptions)
  
  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
  animatedElements.forEach(el => observer.observe(el))
  
  // Observe stat numbers and skill bars
  const statNumbers = document.querySelectorAll('.stat-number')
  const skillBars = document.querySelectorAll('.skill-progress')
  
  statNumbers.forEach(el => observer.observe(el))
  skillBars.forEach(el => observer.observe(el))
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'))
  const duration = 2000 // 2 seconds
  const increment = target / (duration / 16) // 60fps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current)
    }
  }, 16)
}

function animateSkillBar(element) {
  const width = element.getAttribute('data-width')
  setTimeout(() => {
    element.style.width = width
  }, 300)
}

// Smooth scroll for navigation links
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}