import React, { useState } from 'react';
import './Hamburger.css';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar2">
      <div className="navbar2-container container">
        <input type="checkbox" name="" id="" checked={isOpen} onChange={toggleMenu} />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
        <div className="logo"></div>
      </div>
    </nav>
  );
}

export default Hamburger;
