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
    <main className="reservation-page">
      <section className="reservation page-shell">
        <header className="page-heading">
          <p className="section-kicker">Make a little time for a good meal</p>
          <h1>Reserve a table</h1>
          <p>Send us your preferred time and party size. Our team will contact you to confirm.</p>
        </header>
      {submitted ? (
        <div className="confirmation" role="status">
          <span className="confirmation-mark" aria-hidden="true">✓</span>
          <p className="section-kicker">Request received</p>
          <h2>Thank you, {formData.name}.</h2>
          <p>We’ll contact you shortly to confirm your table.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-grid">
            <div className="form-group form-group-wide">
              <label htmlFor="name">Your name</label>
              <input autoComplete="name" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-wide">
              <label htmlFor="phone">Phone number</label>
              <input autoComplete="tel" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Preferred time</label>
              <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-wide">
              <label htmlFor="guests">Number of guests</label>
              <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
            </div>
          </div>
          <div className="form-actions">
            <p>We’ll be in touch to confirm your request.</p>
            <button type="submit" className="btn btn-primary">Request a table <span aria-hidden="true">→</span></button>
          </div>
        </form>
      )}
      </section>
    </main>
  );
}

export default Reservation;