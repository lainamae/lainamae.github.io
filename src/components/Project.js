import React from 'react';
import { useParams } from "react-router-dom";
import { getProjects } from './data.js';

let projects = getProjects();

export default function Project() {

  console.log(projects);
  let { projectID } = useParams();

  const project = projects.find( ({ id }) => id === projectID );

  console.log(project);
  
  let features = project.features;
  let userStories = project.information.userStories;
  let overview = project.information.overview;
  let description = project.information.description;

  return (
    <div className='project'>
      <div className='project-visuals'>
      <img src={project.imageURL} alt="screenshot"/>
      </div>
      <div className='project-information'>
        <h2 className='project-title'>{project.title}</h2>
        <span className='features'> <b>features</b>
          {features.map((feature) => ( <span className='feature'> {feature} </span> ))}
      </span>
        { overview.length > 0 && 
          <span>
            <h2>Overview</h2>
            <p>{overview}</p>
          </span> 
        }

        { description.length > 0 &&
          <span>
            <h2>Description</h2>
            <p>{description}</p>
          </span>
        }
      
        {userStories.length > 0 &&
          <span>
            <h2>User Stories</h2>
            {userStories.map((each) => ( <p> {each} </p> ))}
          </span>
        }

      </div>
    </div>
  );
};

