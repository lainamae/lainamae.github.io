import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from './data.js';

export default function PortfolioView() {
  let projects = getProjects();

  return (
    <div className='PortfolioView'><div className='container'>
      <h1>Selected Works</h1>
      <ul>
        {projects.map(project => (
          <li key={project.title} >
            <Link to={`/projects/${project.id}`}>
              <img src={project.imageURL} alt={project.title} />
              <h2>{project.title}</h2>
            </Link>

            <h4 className='features'>{project.features.map((feature) => (

              <span className='feature'> {feature} </span>

            ))}</h4>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
