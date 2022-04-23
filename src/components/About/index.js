import React from 'react';
import headShot from '../../assets/cover/headshot.jpg';

function About() {
  return (
  <section>
    <div>
      <div>
        <img className='headshot' src={headShot} alt="headshot Scott"></img>        
      </div>
      <p>
        Scott Inthathirath from North York, Ontario. I completed the Web Development Coding Bootcamp at the University of Toronto in April, 2022. 
        Please visit my portfolio page to see some of the work I have completed which demonstrate my abilities with all aspects of the MERN stack. 
      </p>
      <p>
        I have lived in Toronto since 2018. For the last 20 years I have worked for various hospitals implementing information systems. 
        I have always had a passion for technology and travel.  My family is the most important force in my life.
      </p>
    </div>
  </section>
  )
}

export default About;