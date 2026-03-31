import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'AWS',
    'Git',
  ];

  return (
    <div>
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;