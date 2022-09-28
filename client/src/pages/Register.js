import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (value) => {
    console.log(value);
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
