import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact & Location</h2>
      <div className="contact-info">
        <div className="info">
          <h3>Address</h3>
          <p>Nagina Dhampur Road, Near Petrol Pump</p>
          <h3>Contact Number</h3>
          <p>12345678</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d78.0!3d29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjk!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Handiram Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;