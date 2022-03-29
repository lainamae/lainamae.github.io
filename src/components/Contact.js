import React from 'react';
import linkedIn from '../img/linkedin.png';
import github from '../img/github.png';
import email from '../img/email.png';
import twitter from '../img/twitter.png';
import selfie from '../img/lainamae.jpg';



function Contact(){
  return (
   <div className="Contact">
     <div className='contact-container container'>
       <div>
       <h1>Connect with me!</h1>

       </div>
       <div className='buttons'>
       <a href = "mailto:lainamarciano@gmail.com"><button><img src={email} alt='email'></img><span>lainamarciano@gmail.com</span></button></a>
             <a href = "https://www.linkedin.com/in/laina-kernan-6348b4204/" target="_blank" rel="noreferrer"><button><img src={linkedIn} alt='linkedin'></img> <span>LinkedIn</span></button></a>
             <a href = "https://github.com/lainamae" target="_blank" rel="noreferrer"><button><img src={github} alt='github'></img><span>Github</span></button></a>
             <a href = "https://www.twitter.com/lainamae_"><button><img src={twitter} alt='twitter'></img><span>@lainamae_</span></button></a>
            

           </div>
     </div>
   </div>
    );
  }

export default Contact;