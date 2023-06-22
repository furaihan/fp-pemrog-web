import React from "react";
import "./AuthLayout.css";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <React.Fragment>
      <header></header>
      <main>
        <div className="wrapper">
          <div className="form-box">
            <Outlet />
          </div>
        </div>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}
