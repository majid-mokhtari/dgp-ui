import React, { useEffect } from "react";
import { Form, Icon, Button, Input } from "antd";
import "./login.scss";

function LoginForm(props) {
  //const { authError } = props;

  function handleLogin(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.actions.loginRequest(values);
        //   props.onSubmitForm();
      }
    });
  }

  const { getFieldDecorator } = props.form;

  useEffect(() => {
    props.form.setFieldsValue({
      email: "m@m.com",
      password: "irantehran"
    });
  }, []);

  return (
    <div className="login-form-container">
      <h1>Log in to receive reward points!</h1>
      <h3>Login</h3>
      <div className="social-auth-buttons">
        <Button type="primary">
          <Icon type="google" /> Continue with Google
        </Button>
        <Button>
          <i className="fa fa-facebook-f" /> Continue with Facebook
        </Button>
      </div>
      <Form onSubmit={handleLogin} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(<Input prefix={<Icon type="user" />} placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              type="password"
              prefix={<Icon type="lock" />}
              placeholder="Password"
              autoComplete=""
            />
          )}
        </Form.Item>
        <span className="forgot-pass">Forgot password?</span>
        <Button type="primary" htmlType="submit" className="login-btn">
          Log in
        </Button>
        <div className="form-footer">
          <span>
            Dont have an account?{" "}
            <span className="href" onClick={() => props.onClick()}>
              Sign up
            </span>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(LoginForm);
