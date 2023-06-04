import logo from "../../assets/image/logo.svg";
import searchlogo from "../../assets/image/search.svg";
import "./Navbar.css";

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
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/explore">
            Explore
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/support">
            Support
          </a>
        </div>
        <input type="checkbox" name="" id=""/>
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
        <div className="login-button"></div>
        <div className="signup-button"></div>
      </div>
    </nav>
  );
}

export default Navbar;
