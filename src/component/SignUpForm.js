import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import "../css/SignUpForm.css"; // Import your custom CSS for styling
import { useNavigate } from "react-router";


const SignUpForm = () => {
  const [form] = Form.useForm();
  const [formMessage, setFormMessage] = useState("");
  const [serverErrors, setServerErrors] = useState({}); // State to store server errors

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Received values of form:", values);

    const { firstName, lastName, email, nickname, password } = values;    

    const userData = {
        firstName,
        lastName,
        email,
        nickname,
        password,
    };
    
    axios
    .post("http://localhost:8080/auth/signup", userData, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        if (response.status === 200) {
            form.resetFields(); // Clear the form
            message.success("Sign up successful!");
            setServerErrors({}); // Clear server errors on success
        } else {
            // Handle server errors
          if (response.data && response.data.error) {
            setServerErrors({ email: response.data.error });
          } else {
            setServerErrors({}); // Clear server errors if the structure is unexpected
          }
          message.error("Error signing up. Please try again.");
        }
      })
      navigate('/login')
      .catch((error) => {
        console.error("Error:", error);
        message.error("Error signing up. Please try again.");
      });
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <section>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not a valid email address!",
              },
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            validateStatus={serverErrors.email ? "error" : ""}
            help={serverErrors.email}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
              },
            ]}
          >
            <Input placeholder="Nickname" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        {formMessage && <p>{formMessage}</p>}
      </section>
    </div>
  );
};

export default SignUpForm;
