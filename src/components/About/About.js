import React from 'react';
import './about.css';
import { chefs } from '../../data';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <h1>Talented Chefs</h1>
      <section className="chefs-section">
        <div className="chefs-container">
          {chefs.map((chef) => (
            <div className="chef-card" key={chef.id}>
              <img src={chef.image} alt={chef.name} className="chef-photo" />
              <div className="chef-overlay">
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <p className="chef-description">{chef.des}</p>
              </div>
              <div className="chef-info">
                <h3 className="chef-name">{chef.name}</h3>
                <p className="chef-title">{chef.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
