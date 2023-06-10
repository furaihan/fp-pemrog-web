"use client";
// import { useState } from 'react';
import "./Login.css";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Lakukan validasi atau tindakan lain yang diperlukan saat login disubmit
  //   // Misalnya, validasi email dan password, panggil API untuk otentikasi, dll.

  //   // Contoh validasi sederhana
  //   if (email === "") {
  //     alert("Email harus diisi");
  //     return;
  //   }

  //   if (password === "") {
  //     alert("Password harus diisi");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert("Password tidak cocok");
  //     return;
  //   }

  //   // Lakukan tindakan setelah login berhasil
  //   alert("Login berhasil");
  // };

  // return (
  //   <>
  //     <main>
  //       <Navbar />
  //       <div className="form">
  //         <div className="box-from">
  //         <div className="text-login">Login</div>
  //         <div className="form-body">
  //           <div className="email">
  //             <label className="form__label" htmlFor="email">
  //               Email/Phone Number{" "}
  //             </label>
  //             <input
  //               type="email"
  //               id="email"
  //               className="form__input"
  //               placeholder="example@gmail.com"
  //               value={email}
  //               onChange={handleEmailChange}
  //             />
  //           </div>
  //           <div className="password">
  //             <label className="form__label" htmlFor="password">
  //               Password{" "}
  //             </label>
  //             <input
  //               className="form__input"
  //               type="password"
  //               id="password"
  //               placeholder="Password"
  //               value={password}
  //               onChange={handlePasswordChange}
  //             />
  //           </div>
  //           <div className="confirm-password">
  //             <label className="form__label" htmlFor="confirmPassword">
  //               Confirm Password{" "}
  //             </label>
  //             <input
  //               className="form__input"
  //               type="password"
  //               id="confirmPassword"
  //               placeholder="Confirm Password"
  //               value={confirmPassword}
  //               onChange={handleConfirmPasswordChange}
  //             />
  //           </div>
  //         </div>
  //         <button type="submit" className="btn" onClick={handleSubmit}>
  //           Login
  //         </button>

  //       </div>
  //       </div>
  //     </main>
  //   </>
  // );
  return (
    <>
      <main>
        <div className="wrapper-login">
          <div className="form-box-login">
            <div className="lock-login">
              <img src="public\lock.svg" alt="lock" />
            </div>
            <div className="email-login">
              <img src="public\mail.svg" alt="email" />
            </div>

            <h2>Login</h2>
            <form action="#">
              <div className="input-box-login">
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-box-login">
                <input type="password" required />
                <label>Password</label>
              </div>

              <div className="remember-forgot-login">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#"> Forgot Password?</a>
              </div>
              <button type="submit" className="btn-login">
                Login
              </button>
              <div className="signup-register">
                <p>
                  Don&apos;t have an account?{" "}
                  <a href="#" className="signup-link">
                    SignUp
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

export default Login;
