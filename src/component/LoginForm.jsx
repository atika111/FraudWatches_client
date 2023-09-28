import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Alert } from "antd"; // Import Alert from Ant Design
import "../css/LoginForm.css";

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const [error, setError] = useState(null); // State for displaying errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const formData = e
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        formData
      );
      setUser(response.data);
      console.log("Login successful!", response.data);
      navigate('/')
    } catch (error) {
      setError("Login failed: " + error.message); // Set the error state
    }
  };

  return (
    <div className="contact-form">
      <section>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          {error && <Alert message={error} type="error" showIcon />}{" "}
          <fieldset>
            <legend>
              <strong>Log In Form</strong>
            </legend>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
              className="login-form-item"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
              className="login-form-item"
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password (at least 6 characters)"
                minLength={6}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="subButton"
                value="Log In"
              >
                <strong>Log In</strong>
              </Button>
              <Link to="/signup" className="sign_link">
                Don't have an account? Sign Up
              </Link>
            </Form.Item>
          </fieldset>
        </Form>
      </section>
    </div>
  );
};

export default LoginForm;
