import React, { useState, useEffect } from "react";

import "./Login.css";
import { logInWithEmailAndPassword } from "./../../firebase-auth";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);

  return (
    <div className="bg-Login">
      <div className="Login-logo-title-area">
        <ul className="Login-logo-title-area-content">
          <li className="logo"></li>
          <li className="main-title">Login</li>
          <li className="device-title">Keithley-6485</li>
        </ul>
      </div>
      <div className="Login-form">
        <div className="Login-enterance-area">
          <div className="Login-enterance">
            <label className="label">Username</label>
            <input
              className="Login-enterbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
              required
            />

            <label className="label">Password</label>
            <input
              className="Login-enterbox"
              type="password"
              name="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <div className="Login-button-area">
              <button
                className="Button-enter"
                onClick={() => logInWithEmailAndPassword(email, password)}
                type="submit"
              ></button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
