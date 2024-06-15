import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import './style.css';
import img1 from './WhatsApp_Image_2024-05-29_at_13.19.24_3f43ab14-removebg-preview.png';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Education from './Education';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [currentState, setCurrentState] = useState("skills"); // Corrected useState usage

  useEffect(() => {
    const typed = new Typed('.position-text', {
      strings: ['I\'m a Developer.','I\'m a Designer.','I build web apps.'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleStateChange = (state) => {
    setCurrentState(state);
  };

  return (
    <>
      <div className="container">
        <nav>
          <h1>port<span className='portfolio'>folio</span></h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="content">
          <div className="row">
            <div className="col-12 f-1 col-md-6">
              <h1> Hello, I am <span className='portfolio-text'>TAMILARASU E R</span></h1>
              <h3>and <span className='portfolio-text position-text'></span></h3>
             
              <div className="social-media">
                <a href="#"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/tamilarasu-e-r/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                <a href="https://github.com/tamil4511/"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
              </div>
            </div>
            <div className="col-6 f-2">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        <div className="hire" id="about">
          <div className="row" id='skills'>
            <div className="col-12 col-lg-4 hire-col" id='education'>
              <h1 className='why-hire'>Why hire me?</h1>
              <p>who loves building useful and efficient software. I enjoy solving problems and learning new technologies. I'm passionate about creating innovative solutions that make a positive impact.</p>
              <button className='hire-button' onClick={() => handleStateChange("skills")}>SKILLS</button>
              <button className='hire-button' onClick={() => handleStateChange("education")}>Education</button>
              <button className='hire-button' onClick={() => handleStateChange("aboutme")}>About me</button>
            </div>
            <div className="col-12 col-lg-8 ase" style={{ overflowX: "hidden" }}>
  {currentState === "aboutme" && <AboutMe key="aboutme" />}
  {currentState === "skills" && <Skills key="skills" />}
  {currentState === "education" && <Education key="education" />}
</div>
          </div>
        </div>
        <div className="projects" id='projects'>
        <Projects />
        </div>
        <div className="contact" id='contact'>
        <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
