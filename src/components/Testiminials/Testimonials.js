// Testimonials.js
import React, { useState, useEffect } from 'react';
import './testimonials.css'; 
import { testimonials } from '../../data'; 
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div>
        <h1 id='Testimonials'>Testimonials</h1>
        <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
                <div
                key={testimonial.id}
                className={`testimonial-item ${index === current ? 'active' : ''}`}
                style={{ animation: `fadeInOut 6s ease-in-out infinite ${index === current ? '0s' : '6s'}` }}
                >
                    <div className="testimonial-stars">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                        ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-author">{testimonial.author}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonials;
