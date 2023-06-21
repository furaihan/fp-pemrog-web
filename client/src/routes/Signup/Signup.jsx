import "./SignUp.css";
import { Link, Form, redirect, useActionData } from "react-router-dom";
import axios from "axios";

function Signup() {
  const data = useActionData();
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="form-box">
            <h2>SignUp</h2>
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
                  SignUp
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
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
export const registerAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data);
  const submission = {
    username: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };
  const response = await axios.post("http://localhost:3000/signup", submission);
  console.log(response);

  console.log(submission);
  return redirect("#");
};
