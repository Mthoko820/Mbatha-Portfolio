const API_URL = 'https://api.github.com/users/[your-username]/repos';

export const fetchGitHubProjects = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projects = await response.json();
        return projects.map(project => ({
            id: project.id,
            name: project.name,
            description: project.description,
            html_url: project.html_url,
            language: project.language,
            created_at: project.created_at,
            updated_at: project.updated_at,
        }));
    } catch (error) {
        console.error('Failed to fetch GitHub projects:', error);
        return [];
    }
};