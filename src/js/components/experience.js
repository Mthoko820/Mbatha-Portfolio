// This file contains JavaScript for the Experience section, managing the timeline or card display.

document.addEventListener('DOMContentLoaded', () => {
    const experienceData = [
        {
            title: "Software Engineer",
            company: "Tech Innovations Inc.",
            duration: "Jan 2021 - Present",
            description: "Developing cutting-edge software solutions and collaborating with cross-functional teams."
        },
        {
            title: "Junior Developer",
            company: "Web Solutions Ltd.",
            duration: "Jun 2019 - Dec 2020",
            description: "Assisted in the development of web applications and contributed to UI/UX design."
        },
        {
            title: "Intern",
            company: "Startup Hub",
            duration: "Jan 2019 - May 2019",
            description: "Gained hands-on experience in software development and participated in team meetings."
        }
    ];

    const experienceSection = document.querySelector('.experience-section');

    experienceData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <h4>${job.company}</h4>
            <p>${job.duration}</p>
            <p>${job.description}</p>
        `;

        experienceSection.appendChild(jobCard);
    });
});