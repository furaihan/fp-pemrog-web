import logo from "../../assets/image/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ isLoggedin, username }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo-menu">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} className="logo" alt="" width="112" height="28" />
          </a>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/explore" className="navbar-item">
            Explore
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/support" className="navbar-item">
            Support
          </Link>
        </div>
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
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
          <h3>{username}</h3>
        </div>
      )}
    </nav>
  );
}


Navbar.propTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
};
