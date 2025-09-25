const aiSpotlightSection = document.createElement('section');
aiSpotlightSection.classList.add('ai-spotlight');

const aiSpotlightTitle = document.createElement('h2');
aiSpotlightTitle.textContent = 'AI/ML Spotlight';
aiSpotlightSection.appendChild(aiSpotlightTitle);

const aiSpotlightDescription = document.createElement('p');
aiSpotlightDescription.textContent = 'Explore my innovative AI and ML projects that leverage data for impactful solutions.';
aiSpotlightSection.appendChild(aiSpotlightDescription);

const projectList = document.createElement('div');
projectList.classList.add('project-list');

// Sample project data (this could be fetched from an API)
const projects = [
    {
        title: 'AI Chatbot',
        description: 'A conversational AI chatbot that assists users with queries.',
        image: 'path/to/chatbot-image.png',
        link: 'https://github.com/[your-username]/ai-chatbot'
    },
    {
        title: 'Image Classifier',
        description: 'An image classification tool using deep learning techniques.',
        image: 'path/to/image-classifier-image.png',
        link: 'https://github.com/[your-username]/image-classifier'
    },
    {
        title: 'Manufacturing Data Analytics Dashboard',
        description: 'Created interactive Tableau dashboards analyzing production efficiency, quality metrics, and predictive maintenance patterns for Dunlop\'s manufacturing operations.',
        image: 'path/to/dashboard-image.png',
        link: 'https://public.tableau.com/views/DunlopManufacturingDashboard/Overview'
    }
];

// Create project cards
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectCard.appendChild(projectImage);

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectCard.appendChild(projectTitle);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectCard.appendChild(projectDescription);

    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = 'View Project';
    projectLink.target = '_blank';
    projectCard.appendChild(projectLink);

    projectList.appendChild(projectCard);
});

aiSpotlightSection.appendChild(projectList);
document.body.appendChild(aiSpotlightSection);