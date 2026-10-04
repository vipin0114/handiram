import React from 'react';
import './Contact.css';

function Contact() {
  const handleGetDirections = () => {
    const destination = "Handibhog Restaurant, Dhampur–Nagina Road (NH-734), District Bijnor, Uttar Pradesh, India";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewOnMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Handibhog Restaurant, Dhampur–Nagina Road (NH-734), District Bijnor, Uttar Pradesh, India")}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="contact-page">
      <section className="contact page-shell">
        <header className="page-heading">
          <p className="section-kicker">Find your way to us</p>
          <h1>Stop in at Handibhog</h1>
          <p>We’re just off NH-734 on Dhampur–Nagina Road. Call ahead or drop by when you’re passing through.</p>
        </header>
        <div className="contact-layout">
          <div className="contact-copy">
            <div className="contact-block">
              <p className="contact-label">Visit us</p>
              <h2>Dhampur–Nagina Road</h2>
              <p>Near Petrol Pump, NH-734<br />District Bijnor, Uttar Pradesh, India</p>
            </div>
            <div className="contact-block">
              <p className="contact-label">Call ahead</p>
              <a className="contact-phone" href="tel:+919536319870">+91 95363 19870</a>
              <p>Also available: +91 99977 36180</p>
            </div>
            <div className="contact-buttons">
              <button onClick={handleGetDirections} className="btn btn-primary">Get directions <span aria-hidden="true">→</span></button>
              <button onClick={handleViewOnMaps} className="btn btn-outline">View on Google Maps</button>
              <a href="tel:+919536319870" className="btn btn-outline">Call the restaurant</a>
            </div>
          </div>
          <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Handibhog%20Restaurant%2C%20Dhampur%E2%80%93Nagina%20Road%20(NH-734)%2C%20District%20Bijnor%2C%20Uttar%20Pradesh%2C%20India&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Handibhog on Dhampur–Nagina Road"
          ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
  
export default Contact;