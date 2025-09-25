export function initProjects() {
  const projectsGrid = document.getElementById('projects-grid')
  
  // Updated projects data with all 6 projects
  const projects = [
    {
      title: 'Smart Tire Test Report Parser',
      description: 'Built an AI-powered parser that extracts structured data from TRT test files. Automates the generation of PDF reports and feeds test results directly into SQL databases.',
      tech: ['Python', 'Machine Learning', 'SQL', 'PDF Generation', 'Data Parsing'],
      github: 'https://github.com/your-username/trt-parser',
      demo: 'https://your-demo-link.com',
      image: '🧠'
    },
    {
      title: 'Internal AI ChatBot on MS Teams',
      description: 'Designed a plant assistant chatbot that lets technicians retrieve IPs, SOPs, and system documentation via voice commands using Voiceflow + Botpress.',
      tech: ['Voiceflow', 'Botpress', 'MS Teams', 'LLM', 'Voice Recognition'],
      github: 'https://github.com/your-username/dunlop-ai-bot',
      demo: 'https://your-demo-link.com',
      image: '🎙️'
    },
    {
      title: 'Disk Monitoring & Predictive Cleanup',
      description: 'Engineered a Python-based system to monitor server disk usage and sync insights into Excel dashboards for IT planning. Triggered alerts when nearing thresholds.',
      tech: ['Python', 'Excel Integration', 'Monitoring', 'Automation', 'Alerting'],
      github: 'https://github.com/your-username/disk-monitor',
      demo: 'https://your-demo-link.com',
      image: '📦'
    },
    {
      title: 'Real-Time Translator for Factory Teams',
      description: 'Developed a React-based real-time translator that detects spoken English/Zulu/Japanese and displays translations in real time for multilingual environments.',
      tech: ['React', 'Speech Recognition', 'Translation API', 'PDF Generation', 'Multilingual'],
      github: 'https://github.com/your-username/voice-translator',
      demo: 'https://your-demo-link.com',
      image: '🌐'
    },
    {
      title: 'Linux Security Hardening Toolkit',
      description: 'Comprehensive Bash script suite for automated Linux server hardening, including firewall configuration, intrusion detection, log monitoring, and vulnerability scanning with MITRE ATT&CK framework integration.',
      tech: ['Bash Scripting', 'Linux Security', 'iptables', 'AIDE', 'MITRE ATT&CK', 'Vulnerability Scanning'],
      github: 'https://github.com/your-username/linux-security-toolkit',
      demo: 'https://your-demo-link.com',
      image: '🛡️'
    },
    {
      title: 'Cisco Switch Auto-Configuration Engine',
      description: 'Python-based automation tool for Cisco switch deployment using Netmiko. Features VLAN provisioning, port security, QoS configuration, and network health monitoring with SNMP integration.',
      tech: ['Python', 'Netmiko', 'Cisco IOS', 'SNMP', 'Network Automation', 'VLAN Management'],
      github: 'https://github.com/your-username/cisco-automation',
      demo: 'https://your-demo-link.com',
      image: '🔧'
    }
  ]
  
  // Render projects
  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('')
    
    // Add animation classes
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach((card, index) => {
      card.classList.add('fade-in')
      card.style.animationDelay = `${index * 0.1}s`
    })
  }
}

function createProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-image">
        <div style="display: flex; justify-content: center; align-items: center; height: 200px; font-size: 4rem; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
          ${project.image}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="project-link" title="View Code">
            <i class="fab fa-github"></i>
          </a>
          <a href="${project.demo}" target="_blank" class="project-link" title="Live Demo">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  `
}