import logo from "../../assets/image/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Navbar({ isLoggedin, username }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-menu">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} className="logo" alt="" width="112" height="28" />
          </a>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="navbar-item" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/explore" className="navbar-item" onClick={closeMenu}>
            Explore
          </Link>
          <Link to="/about" className="navbar-item" onClick={closeMenu}>
            About
          </Link>
          <Link to="/support" className="navbar-item" onClick={closeMenu}>
            Support
          </Link>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className={`hamburger-lines ${isMenuOpen ? "open" : ""}`}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
      {!isLoggedin ? (
        <div className="navbar-search-login">
        <div className="login-button">
          <Link to="/login" className="login-item">
            Login
          </Link>
        </div>
        <div className="signup-button">
          <Link to="/signup" className="signup-item">
            Sign Up
          </Link>
        </div>
      </div>
      ) : (
        <div className="navbar-search-login">
          <Link to="/profile">Hi {username}</Link>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
};
