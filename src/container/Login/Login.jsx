import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="form">
          <h2>Sign In</h2>
          <div className="inputBox">
            <input type="text" name="name" id="name" required/>
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" name="password" id="password" required/>
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <Link to="#">Forgot Password</Link>
            <Link to="/registration"> Signup</Link>
          </div>
          <input type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
