import "./SignUp.css";

function Signup() {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="form-box">
            

            <h2>SignUp</h2>
            <form action="#">
              <div className="input-box flex">
                <div>
                  <input type="u-name" required />
                  <label>Username</label>
                </div>
                <div className="user">
                  <img src="public\user.svg" alt="user" />
                </div>
              </div>

              <div className="input-box flex">
                <div>
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="email">
                  <img src="public\mail.svg" alt="email" />
                </div>
              </div>

              <div className="input-box flex">
                <div>
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <div className="lock">
                  <img src="public\lock.svg" alt="lock" />
                </div>
              </div>

              <div className="input-box flex">
                <div>
                  <input type="password" required />
                  <label>Confirm Password</label>
                </div>
                <div className="lock-2">
                  <img src="public\lock.svg" alt="lock" />
                </div>
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />I agree to and Privacy Policy
                </label>
              </div>
              <div className="center">
                <button type="submit" className="btn-signup">
                  SignUp
                </button>
              </div>
              <div className="login-register">
                <p>
                  Have an account?{" "}
                  <a href="#" className="login-link">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
