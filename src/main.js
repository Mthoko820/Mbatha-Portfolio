// Import CSS first
import './css/main.css'

// Import utility modules  
import { initTheme } from './js/utils/theme.js'
import { initAnimations } from './js/utils/animations.js'
import { initNavigation } from './js/components/navigation.js'
import { initHero } from './js/components/hero.js'
import { initSkills } from './js/components/skills.js'
import { initProjects } from './js/components/projects.js'
import { initContact } from './js/components/contact.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio website loading...')
  
  try {
    // Initialize core functionality
    initTheme()
    initNavigation()
    initAnimations()
    
    // Initialize components
    initHero()
    initSkills()
    initProjects()
    initContact()
    
    console.log('✅ Portfolio website loaded successfully!')
  } catch (error) {
    console.error('❌ Error loading portfolio:', error)
  }
})