const aboutSection = document.createElement('section');
aboutSection.classList.add('about');

const aboutContent = `
  <h2>About Me</h2>
  <p>Hi, I'm Mthokozisi Mbatha, a passionate developer with a focus on IT, AI/ML, and automation. My vision is to leverage technology to create innovative solutions that make a difference.</p>
  <p>Fun Fact: I love exploring new technologies and often spend my weekends experimenting with AI projects!</p>
`;

aboutSection.innerHTML = aboutContent;

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector('main');
  mainContainer.appendChild(aboutSection);
});