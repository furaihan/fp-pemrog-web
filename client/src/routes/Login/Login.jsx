"use client";
import "./Login.css";
import { Link, Form } from "react-router-dom";
import React from "react";

function Login() {
  return (
    <React.Fragment>
      <h2>Login</h2>
      <Form id="login-form" method="post">
        <div className="input-box-login flex">
          <div>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="email-login">
            <img src="public\mail.svg" alt="email" />
          </div>
        </div>

        <div className="input-box-login flex">
          <div>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="lock-login">
            <img src="public\lock.svg" alt="lock" />
          </div>
        </div>

        <div className="remember-forgot-login">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#"> Forgot Password?</a>
        </div>
        <div className="center">
          <button type="submit" className="btn-login">
            Login
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
