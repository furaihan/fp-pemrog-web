"use client";
import "./Login.css";
import { Link, Form, useActionData, useNavigation } from "react-router-dom";
import React from "react";

function Login() {
  const navigation = useNavigation();
  const data = useActionData();
  return (
    <React.Fragment>
      <h2>Login</h2>
      {data && <p className="errorMsg">{data}</p>}
      <Form id="login-form" method="post">
        <div className="input-box-login flex">
          <div>
            <input name="emailOrUsername" required />
            <label htmlFor="emailOrUsername">Email / Username</label>
          </div>
          <div className="email-login">
            <img src="public\mail.svg" alt="email" />
          </div>
        </div>

        <div className="input-box-login flex">
          <div>
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className="lock-login">
            <img src="public\lock.svg" alt="lock" />
          </div>
        </div>

        <div className="remember-forgot-login">
          <label>
            <input type="checkbox" name="rememberMe" />
            Remember me
          </label>
          <a href="#"> Forgot Password?</a>
        </div>
        <div className="center">
          <button type="submit" className="btn-login">
            {navigation.state === "submitting" ? "Logging In..." : "Login"}
          </button>
        </div>
        <div className="signup-register">
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default Login;
