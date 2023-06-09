import Navbar from "../../component/Navbar/Navbar";
import "./SignUp.css";

function Signup() {
  return (
    <>
      <main>
        <Navbar />
        <div className="wrapper">
          <div className="form-box-login">
            <h2>Login</h2>
            <form action="#">

              <div className="input-box">
                <input type="u-name" required />
                <label>Usename</label>
              </div>
         
              <div className="input-box">
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <input type="password" required />
                <label>Password</label>
              </div>

              <div className="input-box">
                <input type="password" required />
                <label>Repeat Password</label>
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="btn-signup">
                SignUp
              </button>
              <div className="login-register">
                <p>
                  Don&apos;t have an account?{" "}
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
