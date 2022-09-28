import React from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const res = await axios.post("/api/users/login");
      message.success("User logged in successfully");
      navigate("/");
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
          <h3>Sign In Here</h3>

          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="userId" label="User ID">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <p>
                Not a user?<Link to="/register"> Sign up Here</Link>
              </p>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
