import logo from "../../assets/image/logo.svg";
import searchlogo from "../../assets/image/search.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
      <div className="navbar-search-login">
        <div className="navbar-search">
          <img src={searchlogo} alt="Search" className="search-logo" />
        </div>
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
    </nav>
  );
}

export default Navbar;
