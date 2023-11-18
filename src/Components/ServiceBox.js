import React from 'react';

const ServiceBox = ({ iconClass, title, description }) => {
  return (
    <div className="services-box">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="https://github.com/sakthivel2264" className="btn">Read More</a>
    </div>
  );
}

export default ServiceBox;
