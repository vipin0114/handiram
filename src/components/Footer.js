import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Handiram</h3>
          <p>Authentic Indian Cuisine</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Address: Nagina Dhampur Road, Near Petrol Pump</p>
          <p>📞 Phone: +91 9536319870, +91 9997736180</p>
        </div>
        <div className="footer-section">
          <p>&copy; 2026 Handiram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;