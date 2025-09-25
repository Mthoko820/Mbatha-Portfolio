export function initHero() {
  const typingElement = document.getElementById('typing-text')
  
  if (typingElement) {
    const texts = [
      'AI Engineer Enthusiast',
      'Data Engineering & Machine Learning',
      'MES Plant First Line of Support',
      'Innovation Driver',
      'Networking Enthusiast',
      'SQL Database Administrator',
    ]
    
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typeSpeed = 100
    
    function typeWriter() {
      const currentText = texts[textIndex]
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
        typeSpeed = 50
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
        typeSpeed = 100
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true
        typeSpeed = 2000 // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        typeSpeed = 500 // Pause before next text
      }
      
      setTimeout(typeWriter, typeSpeed)
    }
    
    // Start typing animation
    typeWriter()
  }
  
  // Animate floating icons
  const floatingIcons = document.querySelectorAll('.floating-icon')
  floatingIcons.forEach((icon, index) => {
    // Add random delay and duration variation
    const delay = Math.random() * 2
    const duration = 6 + Math.random() * 4
    
    icon.style.animationDelay = `${delay}s`
    icon.style.animationDuration = `${duration}s`
    
    // Add hover effect
    icon.addEventListener('mouseenter', () => {
      icon.style.animationPlayState = 'paused'
      icon.style.transform = 'scale(1.2)'
    })
    
    icon.addEventListener('mouseleave', () => {
      icon.style.animationPlayState = 'running'
      icon.style.transform = 'scale(1)'
    })
  })
}