import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <Link className="brand-mark" to="/" onClick={() => setIsMenuOpen(false)}>
        <img src="/logo.png" alt="" />
        <span>
          <strong>Handibhog</strong>
          <small>North Indian kitchen</small>
        </span>
      </Link>
      <nav ref={navRef} className={isMenuOpen ? 'nav-open' : ''} aria-label="Main navigation">
        <button
          className={`hamburger${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span />
        </button>
        <ul id="primary-navigation">
          <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>Our story</NavLink></li>
          <li><NavLink to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Find us</NavLink></li>
          <li><NavLink className="nav-reserve" to="/reservation" onClick={() => setIsMenuOpen(false)}>Reserve a table</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;