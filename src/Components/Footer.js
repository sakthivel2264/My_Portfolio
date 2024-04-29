import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} Sakthivel Pandiyan | All rights reserved</p>
      </div>
      <div className="footer-iconTop">
          <a href="#home"><i className='bx bx-up-arrow-alt' ></i></a>
        </div>
    </footer>
  );
};

export default Footer;
