import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell page-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>Handibhog</h2>
            <p>Slow-simmered North Indian favorites, made fresh for the road ahead.</p>
          </div>
          <div className="footer-column">
            <p className="footer-label">Explore</p>
            <Link to="/about">Our story</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reserve a table</Link>
          </div>
          <div className="footer-column">
            <p className="footer-label">Find us</p>
            <p>Dhampur–Nagina Road, NH-734<br />District Bijnor, Uttar Pradesh</p>
            <a href="tel:+919536319870">+91 95363 19870</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Handibhog. All rights reserved.</p>
          <Link to="/contact">Contact & location</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;