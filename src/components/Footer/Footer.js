import React from 'react';
import './footer.css'; 
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/images/Asset 16@4x.png'; 
import { MdNavigateNext } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon" />
        </div>
        <div className="footer-newsletter">
          <p>Subscribe Our Newsletter</p>
          <div className="input-icon-container">
            <input type="email" className="input-with-icon" placeholder="Enter your email" />
              <MdNavigateNext className="input-icon" />
            </div>
        </div>
        <div className="footer-contact">
          <p>+12 234 567 8999</p>
          <p>littlelemon@gmail.com</p>
          <p>700 E Grand Ave, Chicago, IL 60611</p>
        </div>
        <div className="footer-hours">
          <p>Tuesday–Thursday: 12am–9pm</p>
          <p>Friday–Sunday: 12am–11pm</p>
          <p>Monday: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
      <p className="footer-copy">© 2024 Little Lemon</p>
    </footer>
  );
};

export default Footer;
