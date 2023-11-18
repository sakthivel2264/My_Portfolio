import React from 'react';
import './projects.css';
const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <div className="project">
          
          <style>
          @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400');
        
            </style>
          <ul>
        <li>
    <a href= "https://github.com/sakthivel2264/Love_Flames.git">
      <i  aria-hidden="true"></i>
      <span> --- Project 1</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/sakthivel2264/Sample-Attendance-System.git">
      <i  aria-hidden="true"></i>
      <span>  --- Project 2</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/sakthivel2264/IOT-PHASE-2-AQM.git">
      <i  aria-hidden="true"></i>
      <span> --- Project 3</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/sakthivel2264/CVS.git">
      <i  aria-hidden="true"></i>
      <span> --- Project 4</span>
    </a>
  </li>
  </ul>
        </div>
    </section>
    );
  };

export default Projects;