import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SignUpForm = (props) => {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    number: "",
    email: "",
    password: "",
    refid: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    props.UserDetails(user);
    setUser({
      username: "",
      fullname: "",
      number: "",
      email: "",
      password: "",
      refid: "",
    });
  };
  return (
    <div className="signupform">
      <div className="title_container">
        <h3>Register</h3>
        <p>Create Your Own Company Accounts</p>
      </div>
      <div className="form_conatiner">
        <form className="input_feilds" onSubmit={submitDetails}>
          <input
            type="text"
            placeholder="Full Name"
            className="form_control"
            name="fullname"
            value={user.fullname}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="User Name"
            className="form_control"
            name="username"
            value={user.username}
            onChange={handleInput}
          />

          <input
            type="number"
            placeholder="Mobile Number"
            className="form_control"
            name="number"
            value={user.number}
            onChange={handleInput}
          />
          <select className="form_control">
            <option>India</option>
            <option>Us</option>
            <option>Uk</option>
            <option>Srilanka</option>
          </select>

          <input
            type="email"
            placeholder="E mail id"
            className="form_control"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password "
            className="form_control"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Referal Id"
            className="form_control"
            name="refid"
            value={user.refid}
            onChange={handleInput}
          />

          <button className="reg_btn">Register</button>
        </form>

        <p>
          Have an Account ?
          <Link to="/login">
            <span className="signinpara"> Sign in </span>
          </Link>
          <span> here </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
