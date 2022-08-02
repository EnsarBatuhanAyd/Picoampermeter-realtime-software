import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="bg-Login">
      <div className="Login-logo-title-area">
        <ul className="Login-logo-title-area-content">
          <li className="logo"></li>
          <li className="main-title">Login</li>
          <li className="device-title">Keithley-6485</li>
        </ul>
      </div>
      <div className="Login-enterance-area">
      <div className="Login-enterance-area-left">
        <p>E-mail</p>
        <p>Password</p>
      </div>
      <div className="Login-enterance-area-right">
        <div className="Login-enterbox"></div>
        <div className="Login-enterbox"></div>
      </div>
      </div>
      <div className="Login-button-area">
      <a className="Button-enter" href="/realtime"><div >Enter</div></a>
      </div>
    </div>
  );
};

export default Login;
