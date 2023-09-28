import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        formData
      );
      setUser(response.data);
      console.log("Login successful!", response.data);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="contact-form">
      <section>
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Log In Form</strong>
            </legend>

            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Password (at least 6 characters)"
              minLength="6"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="subButton" type="submit" value="Log In">
              <strong>Log In</strong>
            </button>
            <Link to="/signup" className="sign_link">
              Dont have user?
            </Link>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
