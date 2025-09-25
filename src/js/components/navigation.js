export function initNavigation() {
  const navbar = document.querySelector('.navbar')
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')
  
  // Handle scroll effects on navbar
  let lastScrollY = window.scrollY
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    
    // Add scrolled class for styling
    if (currentScrollY > 50) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }
    
    lastScrollY = currentScrollY
  })
  
  // Handle mobile menu toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu?.classList.toggle('active')
  })
  
  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active')
      navMenu?.classList.remove('active')
    })
  })
  
  // Update active nav link based on scroll position
  window.addEventListener('scroll', updateActiveNavLink)
  
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]')
    const scrollPos = window.scrollY + 100
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'))
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)
        activeLink?.classList.add('active')
      }
    })
  }
  
  // Add smooth scrolling to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)
      
      if (targetSection) {
        const navbarHeight = navbar.offsetHeight
        const targetPosition = targetSection.offsetTop - navbarHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
}

// In your HTML, ensure the Education link is present
// <nav class="navbar">
//   <div class="nav-container">
//     <!-- ...existing nav items... -->
//     <a href="#education" class="nav-link">Education</a>
//     <!-- ...other nav items... -->
//   </div>
// </nav>