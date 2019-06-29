import React, { useState } from "react";
import { Form, Icon, Button, Input } from "antd";
import "./signup.scss";

function SignupForm(props) {
  //const { authError } = props;

  const [confirmDirty, setConfirmDirty] = useState();

  function handleSignup(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.actions.signUpRequest(values);
        props.onSubmitForm();
      }
    });
  }

  function handleConfirmBlur(e) {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  }

  function compareToFirstPassword(rule, value, callback) {
    const { form } = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  }

  const { getFieldDecorator } = props.form;
  return (
    <div className="signup-form-container">
      <h1>Where should we send your reward points?</h1>
      <h3>Sign Up</h3>
      <div className="social-auth-buttons">
        <Button type="primary">
          <Icon type="google" /> Continue with Google
        </Button>
        <Button>
          <i className="fa fa-facebook-f" /> Continue with Facebook
        </Button>
      </div>
      <Form onSubmit={handleSignup} className="signup-form">
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
        <Form.Item hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(
            <Input
              type="password"
              placeholder="Confirm password"
              onBlur={handleConfirmBlur}
              prefix={<Icon type="lock" />}
            />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-btn">
          Sign up
        </Button>
        <div className="form-footer">
          <span>
            Already have a Do Good Points account?{" "}
            <span className="href" onClick={() => props.onClick()}>
              Log in
            </span>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(SignupForm);
