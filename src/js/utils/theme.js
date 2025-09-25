export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle')
  const htmlElement = document.documentElement
  
  // Get saved theme from localStorage or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark'
  
  // Apply the current theme
  setTheme(currentTheme)
  
  // Add click listener to theme toggle
  themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  })
  
  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    
    // Update toggle icon
    const icon = themeToggle?.querySelector('i')
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'
    }
    
    // Dispatch custom event for theme change
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }))
  }
}