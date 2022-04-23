import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';

function Projects() {

  const [projects] = useState([
    {
      name: 'Crypto Dash',
      description: 'An application that provides current information for crypto currencies',
      link: 'https://sinthath.github.io/crypto-dash/',
      repo: 'https://github.com/sinthath/crypto-dash'
    },
    {
      name: 'X-File Quiz Game',
      description: 'Trivia game for X-File fans',
      link: 'https://sinthath.github.io/week4/',
      repo: 'https://github.com/sinthath/week4'
    },
    {
      name: 'Pharmappoint',
      description: 'Group project website providing pharmacy appointment bookings',
      repo: 'https://github.com/sinthath/Pharmappoint'
    },
    {
      name: 'work-day-scheduler',
      description: 'Hour by Hour scheduler for a work day',
      link: 'https://https://sinthath.github.io/week5/',
      repo: 'https://github.com/sinthath/week5'
    },
    {
      name: 'note-taker',
      description: 'Simple note taker app',
      link: 'https://hidden-meadow-13362.herokuapp.com/notes',
      repo: 'https://github.com/sinthath/note-taker'
    },
    {
      name: 'Run Buddy',
      description: 'A website that offers fitness training services',
      link: 'https://sinthath.github.io/run-buddy/',
      repo: 'https://github.com/sinthath/run-buddy'
    },
    {
      name: 'Team Profile Generator',
      description: 'An app for generating a webpage to showcase team members',
      repo: 'https://github.com/sinthath/team-profile-generator'
    }
  ]);

  return (
    <div>
      <div className='flex-row'>
        {projects.map((project, idx) => (
          <ProjectCard
            project={project}
            key={'project' + idx}
          ></ProjectCard>        
        ))}
      </div>
    </div>
  )
}

export default Projects;