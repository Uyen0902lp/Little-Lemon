import React from 'react';
import './reserve.css';

const ReserveForm = () => {

  return (
    <div>
        <h1>Reserve</h1>
        <form id="reservation-form">
            <div className='form-intro'>
                <h2>Please fill in the form</h2>
            </div>
        <div className="form-group">
            <input type="text" id="full-name" placeholder="Full Name" required />
            <input type="email" id="email" placeholder="Email Address" required />
        </div>
        <div className="form-group">
            <input type="tel" id="phone-number" placeholder="Phone Number" required />
            <input type="number" id="number-of-people" placeholder="Number of people" min="1" required />
        </div>
        <div className="form-group">
            <input type="date" id="date" placeholder="Date" required />
            <input type="time" id="time" placeholder="Time" required />
        </div>
        <textarea id="note" placeholder="Note"></textarea>
        <button type="submit">Book</button>
        </form>
    </div>
  );
};

export default ReserveForm;
