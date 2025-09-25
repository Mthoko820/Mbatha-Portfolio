export function initSkills() {
  const skills = [
    {
      category: 'AI & Automation Tools',
      items: [
        { name: 'Copilot Studio', width: '90%' },
        { name: 'n8n', width: '85%' },
        { name: 'Botpress', width: '85%' },
        { name: 'Voiceflow', width: '80%' },
        { name: 'LangChain', width: '75%' },
        { name: 'Ollama (LLM)', width: '80%' },
        { name: 'Qdrant', width: '75%' },
        { name: 'PrivateGPT', width: '75%' }
      ]
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', width: '90%' },
        { name: 'JavaScript', width: '85%' },
        { name: 'C# / C3', width: '80%' },
        { name: 'SQL', width: '85%' },
        { name: 'HTML / CSS', width: '80%' },
        { name: 'Shell / Bash', width: '70%' }
      ]
    },
    {
      category: 'AI Data Analysis & ML',
      items: [
        { name: 'Tableau', width: '20%' },
        { name: 'Power BI', width: '60%' },
        { name: 'Pandas / NumPy', width: '90%' },
        { name: 'Scikit-learn', width: '85%' },
        { name: 'TensorFlow / PyTorch', width: '75%' },
        { name: 'Data Visualization', width: '85%' },
        { name: 'Statistical Analysis', width: '80%' },
        { name: 'Predictive Modeling', width: '80%' }
      ]
    },
    {
      category: 'Backend & Databases',
      items: [
        { name: 'Node.js', width: '80%' },
        { name: 'FastAPI', width: '75%' },
        { name: 'MongoDB', width: '70%' },
        { name: 'SQL Server / Azure SQL', width: '85%' },
        { name: 'PostgreSQL', width: '70%' }
      ]
    },
    {
      category: 'Frontend & UI',
      items: [
        { name: 'React.js', width: '85%' },
        { name: 'Tailwind CSS', width: '75%' },
        { name: 'Chart.js / Recharts', width: '70%' },
        { name: 'Gradio', width: '80%' }
      ]
    },
    {
      category: 'Platforms & Tools',
      items: [
        { name: 'GitHub Copilot', width: '90%' },
        { name: 'Hyper-V / VirtualBox', width: '80%' },
        { name: 'Azure / Power Platform', width: '85%' },
        { name: 'Windows Server / Linux Ubuntu', width: '85%' },
        { name: 'Visual Studio Code', width: '95%' }
      ]
    }
  ]

  // Render skill bars
  const skillContainer = document.getElementById('skills-container')
  if (skillContainer) {
    skillContainer.innerHTML = skills.map(cat => `
      <div class="skill-category">
        <h3>${cat.category}</h3>
        ${cat.items.map(skill => `
          <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="${skill.width}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('')
  }

  // Animate bars
  const skillBars = document.querySelectorAll('.skill-progress')
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target
        const width = skillBar.getAttribute('data-width')
        setTimeout(() => {
          skillBar.style.width = width
        }, 100)
        skillObserver.unobserve(skillBar)
      }
    })
  }, observerOptions)

  skillBars.forEach(bar => {
    bar.style.width = '0%'
    bar.style.transition = 'width 1.5s ease-in-out'
    skillObserver.observe(bar)
  })

  // Hover effects
  const skillItems = document.querySelectorAll('.skill-item')
  skillItems.forEach(item => {
    const skillBar = item.querySelector('.skill-progress')
    const skillName = item.querySelector('.skill-name')

    item.addEventListener('mouseenter', () => {
      if (skillBar) skillBar.style.transform = 'scaleY(1.1)'
      if (skillName) skillName.style.color = 'var(--primary-color)'
    })

    item.addEventListener('mouseleave', () => {
      if (skillBar) skillBar.style.transform = 'scaleY(1)'
      if (skillName) skillName.style.color = 'var(--text-primary)'
    })
  })

  // Fade-in effect
  const skillCategories = document.querySelectorAll('.skill-category')
  skillCategories.forEach((category, index) => {
    category.style.opacity = '0'
    category.style.transform = 'translateY(20px)'
    category.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    setTimeout(() => {
      category.style.opacity = '1'
      category.style.transform = 'translateY(0)'
    }, index * 200)
  })
}
