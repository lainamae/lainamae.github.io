import React from 'react';
import PortfolioView from './PortfolioView';

import selfie from '../img/lainamae.jpg';
import linkedIn from '../img/linkedin.png';
import github from '../img/github.png';
import email from '../img/email.png';
import down from '../img/arrow.png';

import html from '../img/html5.png';
import css from '../img/css.png';
import mongodb from '../img/mongodb.png';

import javascript from '../img/javascript.svg';
import react from '../img/react.svg';
import sass from '../img/sass.svg';
import nodejs from '../img/nodejs.svg';
import bootstrap from '../img/bootstrap.svg';





// import PortfolioView from './PortfolioView';

// import { Component } from 'react/cjs/react.production.min';
import Nouns from './Nouns';

// let nouns = [
//   'developer',
//   'designer',    
//   'dreamer'
// ];

export class HomeView extends React.Component {
  render() {
    // let nounSpan = document.getElementsByClassName('noun');
    // console.log(nounSpan);
    // nounSpan.innerText = nouns[2];
    return (
      <div className="HomeView">
        <div id='home' className='home'>
        <div className='splash container margin-top'>
        <div>
           <h1>Laina Mae</h1>
           <h2>software engineer / <Nouns/> </h2>
           <div className='buttons'>
             <a href = "https://www.linkedin.com/in/laina-kernan-6348b4204/" target="_blank" rel="noreferrer"><button><img src={linkedIn} alt='linkedin'></img></button></a>
             <a href = "https://github.com/lainamae" target="_blank" rel="noreferrer"><button><img src={github} alt='github'></img></button></a>
             <a href = "mailto:lainamarciano@gmail.com"><button><img src={email} alt='email'></img></button></a>

           </div>
          
        </div>
     
        <div className='selfie'>
         <img src={selfie} alt="Laina"></img>
        </div>
        
       
        </div>
        <div className='down'><a href="#more"><button><img src={down} alt='down arrow'></img></button></a></div>
        </div> 
        {/* end "home" */}
        
        <div id='more'>
          <div className='more container margin-top'>
            <div className='summary'>
              <p>I'm a Fullstack Web Developer with a background in visual design. My creative sensiblities allow me to excel in Frontend work. I have experience building Progressive Web Apps, Single Page Applications, and Native Apps.</p>
              <p>When I'm not programming I am either spending time with my wife and bird, playing games (TTRPG, boardgames, or video games), or cooking vegetarian food. </p>
              <p>I'm looking forward to using my skills and insight to make the world a better place by making products that expand accesibility and inclusivity.</p>
            </div>
            <div className='skills'>
            <h2>Top Skills</h2>
            <ul className='logos'>
              <li><img src={html} alt="HTML logo" ></img></li>
              <li><img src={css} alt="HTML logo" ></img></li>
              <li><img src={javascript} alt="Javascript logo" ></img></li>
              <li><img src={nodejs} alt="Node.js logo" ></img></li>
              <li><img src={react} alt="React logo" ></img></li>
              <li><img src={sass} alt="Sass logo" ></img></li>
              <li><img src={bootstrap} alt="Bootstrap logo" ></img></li>
              <li><img src={mongodb} alt="MongoDB logo" ></img></li>
            </ul>
          </div>
          </div>

          
        </div>
        <PortfolioView></PortfolioView>
                
      </div>
       );
  }
}