import React from 'react'
import './menu.css'
import { dishes } from '../../data';

const Menu = () => {
      return (
        <div className="dishes-container">
          <h1>Popular Dishes</h1>
          <div className="dishes-grid">
            {dishes.map((dish) => (
              <div className="dish-card" key={dish.id}>
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <div className='dish-circle'></div>
                <div className="dish-info">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  <p className="dish-price">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }


export default Menu