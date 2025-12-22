import React, { useState } from 'react';
import './Reservation.css';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send data to server
    setSubmitted(true);
  };

  return (
    <section className="reservation">
      <h2>Reserve a Table</h2>
      {submitted ? (
        <p className="confirmation">Thank you! Your reservation has been submitted. We will contact you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
          </div>
          <button type="submit" className="btn">Submit Reservation</button>
        </form>
      )}
    </section>
  );
}

export default Reservation;