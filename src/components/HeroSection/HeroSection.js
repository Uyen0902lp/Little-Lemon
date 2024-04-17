import React from 'react'
import './hero.css'
import image from '../../assets/images/plate2.png'
// 20:56-38:00
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="left-intro">
          <p>Enjoy the Mediterranean cuisine with reasonable price</p>
        </div>
        <div className="left-welcome">
          <p>Welcome to Little Lemon</p>
        </div>
        <div className="left-des">
          <p>Experience the essence of Mediterranean charm at Little Lemon. Savor a curated menu that blends tradition with a modern twist, all in a cozy atmosphere that feels like home. Little Lemon — where every meal is a celebration of culture and taste.</p>
        </div>
        <div className="left-btn">
          <button>Explore Menu</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="right-img">
          <img src={image} alt="Right plate" />
          <div class="circle"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection