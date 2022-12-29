import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LoginForm = () => {
  return (
    <div className="loginform">
      <div className="login_title">
        <h1>Login</h1>
        <p>Enter Your Login Details</p>
      </div>
      <div className="loginformcontainer">
        <input
          type="text"
          placeholder="Username name or Email"
          className="form_control"
        />
        <input type="text" placeholder="Password" />
        <button className="sign_btn">Sign in</button>
        <p>
          Have an Account ?
          <Link to="/">
            <span className="signinpara"> Sign in </span>
          </Link>
          <span> here </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
