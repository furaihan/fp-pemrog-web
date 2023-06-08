import Navbar from "../../component/Navbar/Navbar";
import "./SignUp.css";

function Signup() {
  return (
    <>
      <main>
        <Navbar />
        <div className="form">
          <div className="text-signup">SignUp</div>
          <div className="form-body">
            <div className="username">
              <label className="form__label" htmlFor="firstName">
                First Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" htmlFor="lastName">
                Last Name{" "}
              </label>
              <input
                type="text"
                id="lastName"
                className="form__input"
                placeholder="Last Name"
              />
            </div>
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
            SignUp
          </button>
        </div>
      </main>
    </>
  );
}

export default Signup;
