export function initContact() {
  const contactForm = document.getElementById('contact-form')
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit)
  }
  
  // Add animation to contact items
  const contactItems = document.querySelectorAll('.contact-item')
  contactItems.forEach((item, index) => {
    item.classList.add('slide-in-left')
    item.style.animationDelay = `${index * 0.1}s`
  })
  
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-links a')
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-5px) scale(1.1)'
    })
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0) scale(1)'
    })
  })
}

async function handleFormSubmit(e) {
  e.preventDefault()
  
  const form = e.target
  const formData = new FormData(form)
  const submitButton = form.querySelector('button[type="submit"]')
  
  // Get form values
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  }
  
  // Validate form
  if (!validateForm(data)) {
    showNotification('Please fill in all fields correctly.', 'error')
    return
  }
  
  // Show loading state
  const originalText = submitButton.innerHTML
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitButton.disabled = true
  
  try {
    // Simulate form submission (replace with your actual endpoint)
    await simulateFormSubmission(data)
    
    // Show success message
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success')
    form.reset()
    
  } catch (error) {
    console.error('Form submission error:', error)
    showNotification('Failed to send message. Please try again.', 'error')
  } finally {
    // Reset button
    submitButton.innerHTML = originalText
    submitButton.disabled = false
  }
}

function validateForm(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  return (
    data.name.trim().length > 0 &&
    emailRegex.test(data.email) &&
    data.subject.trim().length > 0 &&
    data.message.trim().length > 10
  )
}

async function simulateFormSubmission(data) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // You can replace this with actual form submission logic
  console.log('Form data:', data)
  
  // Example: Send to email service or contact API
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })
  // 
  // if (!response.ok) {
  //   throw new Error('Failed to send message')
  // }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
    <span>${message}</span>
  `
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    zIndex: 9999,
    animation: 'slideInRight 0.3s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
  })
  
  // Add to DOM
  document.body.appendChild(notification)
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease'
    setTimeout(() => notification.remove(), 300)
  }, 5000)
}

// Add notification animations to CSS
const notificationStyles = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`

// Inject styles
const styleSheet = document.createElement('style')
styleSheet.textContent = notificationStyles
document.head.appendChild(styleSheet)