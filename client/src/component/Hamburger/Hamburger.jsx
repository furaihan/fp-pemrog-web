import "./Hamburger.css";

function Hamburger() {
  return (
    <nav className="navbar2">
      <div className="navbar2-container container">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Explore</a></li>
              <li><a href="#food">About</a></li>
              <li><a href="#food-menu">Support</a></li>
          </ul>
          <div className="logo">
            
          </div>
      </div>
  </nav>
  );
}

export default Hamburger;
