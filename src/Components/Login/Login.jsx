import React, { useState } from "react";
import ReactDOM from "react-dom";
import RealtimePage from "../../Pages/RealtimePage";
import "./Login.css";

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "123",
    },
    {
      username: "user1",
      password: "u123",
    },
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      {" "}
      <form className="Login-enterance-area" onSubmit={handleSubmit}>
        <div className="Login-enterance">
          <label className="label">Username</label>
          <input className="Login-enterbox" type="text" name="uname" required />

          <label className="label">Password</label>
          <input
            className="Login-enterbox"
            type="password"
            name="pass"
            required
          />
          <div className="error-decoration">
            {renderErrorMessage("uname")}
            {renderErrorMessage("pass")}
          </div>
          <div className="Login-button-area">
            <input className="Button-enter" type="Submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
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
        {" "}
        {isSubmitted ? <div><RealtimePage /></div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
