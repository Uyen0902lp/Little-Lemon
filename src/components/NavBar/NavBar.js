import React from 'react'
import logo from '../../assets/images/Asset 16@4x.png'
import './navbar.css'
// 9:43-20:40

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <img src={logo} alt="Logo Navbar" />
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reserve</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar