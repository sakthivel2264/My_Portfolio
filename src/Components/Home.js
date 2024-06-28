/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Home.css";
import pdf from '../Images/Sakthivel P Resume.pdf';
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, <span>This is</span></h3>
        <h1>Sakthivel</h1>
        <h4>A <span>Passionate</span>
        <h4>web developer.</h4><span className="multiple-text"></span></h4>
        
        <div className="social-media">
          
          <a href="https://instagram.com/the_intense_rider?igshid=NTc4MTIwNjQ2YQ=="><i className='bx bxl-instagram'></i></a>
          <a href="https://github.com/sakthivel2264"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/sakthivel-pandiyan-625289270/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRspxfJqsSnmQXRHSFDXbScCrQJXqrlHTcxDBjQdTHvkJHtrSjHDdfblWmhdfTFFSNxqMmQ"><i className='bx bxl-gmail'></i></a>
        </div>
        <a href={pdf} download pdf>
        <button class='glowing-btn'><span class='glowing-txt'>DOWN<span class='faulty-letter'>LOAD</span>  CV</span></button>
        </a>
      </div>
    </section>
  );
}

export default Home;
