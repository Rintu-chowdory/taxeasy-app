import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Project A',
            description: 'Description for Project A',
            link: 'https://example.com/project-a'
        },
        {
            name: 'Project B',
            description: 'Description for Project B',
            link: 'https://example.com/project-b'
        },
        {
            name: 'Project C',
            description: 'Description for Project C',
            link: 'https://example.com/project-c'
        }
    ];

    return (
        <div>
            <h1>DevOps Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.name}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;