import React from 'react';
import './Contact.css';

function Contact() {
  const handleGetDirections = () => {
    const destination = "Handibhog Restaurant, Dhampurâ€“Nagina Road (NH-734), District Bijnor, Uttar Pradesh, India";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewOnMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Handibhog Restaurant, Dhampurâ€“Nagina Road (NH-734), District Bijnor, Uttar Pradesh, India")}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <main className="contact-page">
      <section className="contact page-shell">
        <h2>Contact & Location</h2>
        <div className="contact-layout">
          <div className="contact-copy">
            <div>
          Weâ€™d love to hear from you. Whether youâ€™re planning a stop on your journey, have a query, or want to know more about Handibhog Restaurant, feel free to get in touch with us
            </div>
            <div className="info">
              <h3>ðŸ“ Address</h3>
              <p>Handibhog Restaurant</p>
              <p>Dhampurâ€“Nagina Road (NH-734)</p>
              <p>District Bijnor, Uttar Pradesh, India</p>
              <h3>Contact Number</h3>
              <p>ðŸ“ž Phone: +91 9536319870, +91 9997736180</p>
              <p>(Available during restaurant working hours)</p>

              <div className="contact-buttons">
                <button onClick={handleGetDirections} className="directions-btn">
                  ðŸ—ºï¸ Get Directions
                </button>
                <button onClick={handleViewOnMaps} className="maps-btn">
                  ðŸ“ View on Google Maps
                </button>
                <button onClick={() => handleCall('+919536319870')} className="call-btn">
                  ðŸ“ž Call Now
                </button>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.4545127093356!2d78.456097!3d29.386257199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bc55a61b60139%3A0xc809f44e1a217fd7!2sHANDIBHOG%20RESTAURENT!5e0!3m2!1sen!2suk!4v1768333263340!5m2!1sen!2suk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Handibhog Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
  
export default Contact;
