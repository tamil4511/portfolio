import React, { useState } from 'react';
import infinieElegance from '../images/infinieElegance.png';
import travelBee from '../images/Screenshot 2024-06-02 130802.png';
import weather from '../images/weather.avif';
import classroom from '../images/classroom.jpg';
import remainder from '../images/remaindeer.webp';
import bmi from '../images/bmi.png';
import img from '../images/Screenshot 2024-06-02 130802.png';
import task from '../images/task.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const projects = [
  {
    title: 'Infinite Elegance',
    description: 'Infinite Elegance is a user-friendly web platform that simplifies event planning, from decorations to catering and entertainment. It offers easy customization and efficient management for a seamless event coordination experience.',
    img: infinieElegance,
    skills: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
  {
    title: 'Travel Bee',
    description: 'Travel Bee is a web-based travel booking platform allowing travel enthusiasts to book their dream vacations directly from the agency in real-time, eliminating intermediaries. It offers a user-friendly electronic commerce experience for planning and booking adventures.',
    img: travelBee,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
  {
    title: 'Weather Application',
    description: 'This project is a simple weather application developed using ReactJS. It allows users to enter a city name and view the current weather conditions including temperature, humidity, and wind speed.',
    img: weather,
    skills: ['HTML', 'CSS', 'Open Weather API', 'React', 'npm'],
  },
  {
    title: 'Classroom',
    description: 'Classroom is a web application designed to facilitate classroom interactions, document sharing, and collaboration among users. This platform provides a seamless environment for educators and students to engage in productive academic discussions and resource sharing.',
    img:classroom,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP', 'MySQL', 'notify.js'],
  },
  {
    title: 'Reminder Application',
    description: 'The Memory Reminder App is a straightforward and user-friendly application designed to help you recall and cherish important memories on specific dates. Whether it\'s a special event, a birthday, an anniversary, or any other significant moment, this app ensures you never miss a cherished memory.',
    img: remainder,
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL', 'PHP', 'notify.js'],
  },
  {
    title: 'bmi calculator',
    description: 'A BMI (Body Mass Index) Calculator built using React. This calculator allows users to input their height and weight, and it calculates their BMI along with their weight status.',
    img:bmi,
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React', 'notify.js'],
  },
  {
    title: 'Guvi Task',
    description: 'I did a mini task for Guvi, which involved creating a login and registration system. I want to validate and store the session in Redis and store the profile in MongoDB. The profile has an option to store an image, personal details, social media links, and also includes an option to edit. I integrated both MySQL and MongoDB for this task.',
    img: task,
    skills: ['HTML', 'CSS', 'Bootstrap', 'MySQL', 'PHP', 'MongoDB', 'Redis'],
  }
];


const Projects = () => {
  const [size, setSize] = useState(3);

  const loadMore = () => {
    setSize(projects.length);
  };
  return (
    <div>
      <h2 className='project-title'>Projects</h2>
      <div className="work-list">
        {projects.slice(0, size).map((project, index) => (
          <div className="work" key={index}>
            <img src={project.img} alt={project.title} style={{backgroundColor:"white"}}/>
            <div className="layer">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills">
              {
                project.skills.map((skill, index) => (
                  <h6 key={index}>{skill}</h6>
                ))
              }
              </div>

              <div className="main-img">
                <a href="https://github.com/tamil4511/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ width: '15px', height: '15px', color: "white" }}  />
</a>
              </div>
            </div>
          </div>
        ))}
        <div className="project-btn w-100">
          {size < projects.length && (
            <button className='btn' onClick={loadMore}>see more</button>
          )}
          {size === projects.length && (
            <button className='btn' onClick={() => setSize(3)}>see less</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
