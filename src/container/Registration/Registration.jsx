import React from "react";
import { Link } from "react-router-dom";

import "./Registration.css";

const Registration = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="form">
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input type="text" name="name" id="name" required />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" name="name" id="name" required />
            <span>City</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" name="password" id="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" name="password" id="password" required />
            <span>Confirm Password</span>
            <i></i>
          </div>
          <div className="link">
            <Link to="/login"> Login</Link>
          </div>
          <input type="submit" value="Register" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
