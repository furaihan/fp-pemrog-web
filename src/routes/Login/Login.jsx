"use client"
import Navbar from "../../component/Navbar/Navbar";
import { useState } from 'react';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan validasi atau tindakan lain yang diperlukan saat login disubmit
    // Misalnya, validasi email dan password, panggil API untuk otentikasi, dll.

    // Contoh validasi sederhana
    if (email === "") {
      alert("Email harus diisi");
      return;
    }

    if (password === "") {
      alert("Password harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak cocok");
      return;
    }

    // Lakukan tindakan setelah login berhasil
    alert("Login berhasil");
  };

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
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
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
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>
          <div className="image-login">
            <img
              src="src\assets\image\backround-Login.png"
              alt="backround-login"
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </main>
    </>
  );
}

export default Login;
