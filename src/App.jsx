import "./App.css";
import logo from "./assets/image/logo.svg";
import searchlogo from "./assets/image/search.svg";

function App() {
  return (
    <>
      <main>
        <nav className="navbar">
          <div className="navbar-logo-menu">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img
                  src={logo}
                  className="logo"
                  alt=""
                  width="112"
                  height="28"
                />
              </a>
            </div>
            <div className="navbar-menu">
              <a className="navbar-item" href="#">
                Home
              </a>
              <a className="navbar-item" href="#">
                Explore
              </a>
              <a className="navbar-item" href="#">
                About
              </a>
              <a className="navbar-item" href="#">
                Support
              </a>
            </div>
          </div>
          <div className="navbar-search-login">
            <div className="navbar-search">
              <img src={searchlogo} alt="Search" className="search-logo" />
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}

export default App;
