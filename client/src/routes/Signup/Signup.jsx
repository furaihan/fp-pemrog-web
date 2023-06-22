import "./SignUp.css";
import { Link, Form, useActionData, useNavigation } from "react-router-dom";
import React from "react";

function Signup() {
  const data = useActionData();
  const state = useNavigation();
  return (
    <React.Fragment>
      <h2>SignUp</h2>
      {data && data.error && <p>{data.error}</p>}
      <Form id="signup-form" method="post">
        <div className="input-box flex">
          <input type="u-name" name="username" required />
          <label>Username</label>
          <div className="user">
            <img src="public\user.svg" alt="user" />
          </div>
        </div>
        <div className="input-box flex">
          <input type="email" name="email" required />
          <label>Email</label>
          <div className="email">
            <img src="public\mail.svg" alt="email" />
          </div>
        </div>
        <div className="input-box flex">
          <input type="password" name="password" required />
          <label>Password</label>
          <div className="lock">
            <img src="public\lock.svg" alt="lock" />
          </div>
        </div>
        <div className="input-box flex">
          <input type="password" name="confirmPassword" required />
          <label>Confirm Password</label>
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
            {state === "action"
              ? "Loading..."
              : state === "success"
              ? "Success"
              : "Sign Up"}
          </button>
        </div>
        <div className="login-register">
          <p>
            Have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default Signup;
