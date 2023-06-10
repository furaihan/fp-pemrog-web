import "./Footer.css";
import logo from "../../assets/image/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="copyright">&copy; Kelompok 8 21-IF-08. All rights reserved</div>
        <div className="logo-footer">
          <img src={logo} className="logo" alt="" width="112" height="28" />
        </div>
        <div className="navigation">
            <div className="navigation-items">
                <div className="navigation-home">
                    <p>Home</p>
                    <div className="home-line"></div>
                </div>
                <div className="navigation-explore" href="/explore">
                    <p>Explore</p>
                    <div className="explore-line"></div>
                </div>
                <div className="navigation-about" href="/about">
                    <p>About</p>
                    <div className="about-line"></div>
                </div>
                <div className="navigation-support" href="/support">
                    <p>Support</p>
                    <div className="support-line"></div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
