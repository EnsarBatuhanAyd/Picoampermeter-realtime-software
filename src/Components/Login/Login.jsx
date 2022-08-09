import React, { useState, useEffect } from "react";
import firebaseApp from "./../../firebase";
import "./Login.css";
// import { logInWithEmailAndPassword} from "./../../firebase-auth";
import RealtimePage from "../../Pages/RealtimePage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from "react-router";

const auth = getAuth(firebaseApp());


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);
  const [errorMessages, setErrorMessages] = useState({});
  // const [user, loading, error] = useAuthState(auth);

  const errors = {
    errorlog: "Invalid mail or password please check it!",
   
  };
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStatus(false);
   
    } catch (err) {
      console.error(err);
      setErrorMessages({ name: "errorlog", message: errors.errorlog });
 
    }
  };
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
            <div className="error-decoration">{renderErrorMessage("errorlog")}</div>
            <div className="Login-button-area">
              <button
                className="Button-enter"
                onClick={() => logInWithEmailAndPassword(email, password)}
                type="submit"
              >Enter</button>
              {status ? <Redirect to="/" /> : <RealtimePage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
