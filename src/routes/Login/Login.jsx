import Navbar from "../../component/Navbar/Navbar";
import "./Login.css";

function login() {
  
  return (
    <>
      <main>
        <Navbar />
        <div className="form">
          <div className="text-login">Login</div>
          <div className="form-body">
            <div className="email">
              <label className="form__label" htmlFor="email">
                Email/Phone Number{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">
                Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" htmlFor="confirmPassword">
                Confirm Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="image-login">
            <img
              src="src\assets\image\backround-Login.png"
              alt="backround-login"
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </main>
    </>
  );
}

export default login;
