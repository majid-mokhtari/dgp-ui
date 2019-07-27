import React, { useEffect } from "react";
import { Form, Icon, Button, Input } from "antd";
import "./forgotPassword.scss";

function LoginForm(props) {
  //const { authError } = props;

  function handleLogin(e) {
    e.preventDefault();
    props.form.validateFields((err, { email, password }) => {
      if (!err) {
        // props.actions.loginRequest({
        //   email,
        //   password
        // });
      }
    });
  }

  const { getFieldDecorator } = props.form;

  return (
    <div className="login-form-container">
      <h1>Forgot your password? That's no good.</h1>
      <h3>Enter your email to receive password reset instructions.</h3>
      <Form onSubmit={handleLogin} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(<Input prefix={<Icon type="user" />} placeholder="Email" />)}
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-btn">
          Send
        </Button>
        <div className="form-footer">
          <span className="href" onClick={() => props.onClick()}>
            back
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(LoginForm);
