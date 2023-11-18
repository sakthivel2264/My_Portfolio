import React from 'react';
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <ServiceBox
          iconClass="bx bx-code"
          title="Web Development"
          />
          
        <ServiceBox
          iconClass="bx bx-paint"
          title="UI/UX Design"
          
        />
        <ServiceBox
          iconClass="bx bx-mobile"
          title="Mobile Apps"
          
        />
      </div>
    </section>
  );
}

export default Services;
