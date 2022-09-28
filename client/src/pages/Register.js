import React from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (value) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      await axios.post("/api/users/register", value);
      message.success("User registered successfully");
      navigate("/login");
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      message.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-form">
          <h1>Heaven's Kitchen</h1>
          <h3>Sign Up Here</h3>

          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="userId" label="User ID">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <p>
                Already a user?<Link to="/login"> Sign in Here</Link>
              </p>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
