import "./Footer.css";
import logo from "../../assets/image/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="copyright">
          &copy; Kelompok 8 21-IF-08. All rights reserved
        </div>
        <div className="logo-footer">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>
        <div className="navigation">
          <div className="navigation-items">
            <div className="navigation-home" to="/">
              <Link to="/">
                <p className="text-white font-normal">Home</p>
                <div className="home-line"></div>
              </Link>
            </div>
            <div className="navigation-explore" href="/explore">
              <Link to="/explore">
                <p className="text-white font-normal">Explore</p>
                <div className="explore-line"></div>
              </Link>
            </div>
            <div className="navigation-about" href="/about">
              <Link to="/about">
                <p className="text-white font-normal">About</p>
                <div className="about-line"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
