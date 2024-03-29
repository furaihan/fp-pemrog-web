import "./Signup.css";
import { Link, Form, useActionData, useNavigation } from "react-router-dom";
import React, { useEffect } from "react";

function Signup() {
  const data = useActionData();
  const state = useNavigation();
  useEffect(() => {
    console.log(data);
    console.log(state.state);
  }, [data, state]);
  return (
    <React.Fragment>
      <h2>SignUp</h2>
      {data && <div className="errorMsg">{data}</div>}
      <Form id="signup-form" method="post">
        <div className="input-box flex">
          <input type="u-name" name="username" required />
          <label>Username</label>
          <div className="user-logo">
            <img src="user.svg" alt="user" />
          </div>
        </div>
        <div className="input-box flex">
          <input type="e-mail" name="email" required />
          <label>Email</label>
          <div className="email">
            <img src="mail.svg" alt="email" />
          </div>
        </div>
        <div className="input-box flex">
          <input type="password" name="password" required />
          <label>Password</label>
          <div className="lock">
            <img src="lock.svg" alt="lock" />
          </div>
        </div>
        <div className="input-box flex">
          <input type="password" name="confirmPassword" required />
          <label>Confirm Password</label>
          <div className="lock-2">
            <img src="lock.svg" alt="lock" />
          </div>
        </div>
        <div className="privacy-policy">
          <label>
            <input type="checkbox" />I agree to the terms of use and your
            privacy policy
          </label>
        </div>
        <div className="center">
          <button type="submit" className="w-[70%] bg-[#162938]"
            style={{ color: "white" }}>
            {state.state === "submitting"
              ? "Signing Up..."
              : state.state === "loading"
              ? "Saved!"
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
