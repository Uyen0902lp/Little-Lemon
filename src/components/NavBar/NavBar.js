import React, { useState } from 'react';
import logo from '../../assets/images/Asset 16@4x.png';
import './navbar.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <div className="nav-wrapper">
            <div className="nav-left">
                <img src={logo} alt="Logo Navbar" />
            </div>
            <div className="nav-right">
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className={`nav-list ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="HeroSection" spy={true} smooth={true} onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="Menu" spy={true} smooth={true} onClick={() => setIsOpen(false)}>Menu</Link></li>
                        <li><Link to="Reserve" spy={true} smooth={true} onClick={() => setIsOpen(false)}>Reserve</Link></li>
                        <li><Link to="Testimonials" spy={true} smooth={true} onClick={() => setIsOpen(false)}>Testimonials</Link></li>
                        <li><Link to="About" spy={true} smooth={true} onClick={() => setIsOpen(false)}>About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
