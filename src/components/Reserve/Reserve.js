import React, { useState } from 'react';
import './reserve.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReserveForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');

    const clearForm = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setNumberOfPeople('');
        setDate('');
        setTime('');
        setNote('');
    };

    const notify = () => toast("Thank you for choosing Little Lemon. Please check your email for your order!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        onClose: clearForm 
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        notify(); 
    };

    return (
        <div>
            <h1 id='Reserve'>Reserve</h1>
            <form id="reservation-form" onSubmit={handleSubmit}>
                <div className='form-intro'>
                    <h2>Please fill in the form</h2>
                </div>
                <div className="form-group">
                    <input type="text" id="full-name" placeholder="Full Name" required value={fullName} onChange={e => setFullName(e.target.value)} />
                    <input type="email" id="email" placeholder="Email Address" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="tel" id="phone-number" placeholder="Phone Number" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    <input type="number" id="number-of-people" placeholder="Number of people" min="1" required value={numberOfPeople} onChange={e => setNumberOfPeople(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="date" id="date" placeholder="Date" required value={date} onChange={e => setDate(e.target.value)} />
                    <input type="time" id="time" placeholder="Time" required value={time} onChange={e => setTime(e.target.value)} />
                </div>
                <textarea id="note" placeholder="Note" value={note} onChange={e => setNote(e.target.value)}></textarea>
                <button type="submit">Book</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ReserveForm;
