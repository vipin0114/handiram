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
            src="https://maps.google.com/maps?q=29.3861499,78.4528659&z=15&output=embed"
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