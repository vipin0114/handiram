import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact & Location</h2>
      <div className="contact-info">
        <div>
          We’d love to hear from you. Whether you’re planning a stop on your journey, have a query, or want to know more about Handiram Restaurant, feel free to get in touch with us
        </div>
        <div className="info">
          <h3>📍 Address</h3>
          <p>Handiram Restaurant</p>
          <p>Dhampur–Nagina Road (NH-734)</p>
          <p>District Bijnor, Uttar Pradesh, India</p>
          <h3>Contact Number</h3>
          <p>📞 Phone
📱 +91 9871872037,8285604443
<p>(Available during restaurant working hours)</p></p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.4545127093356!2d78.456097!3d29.386257199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bc55a61b60139%3A0xc809f44e1a217fd7!2sHANDIRAM%20RESTAURENT!5e0!3m2!1sen!2suk!4v1768333263340!5m2!1sen!2suk"
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