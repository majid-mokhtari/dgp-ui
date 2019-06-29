import React, { useEffect } from "react";
import { Modal } from "antd";
import LoginForm from "./LoginForm";

const LoginModal = props => {
  function handleCloseModal(e) {
    props.onCloseLoginModal();
  }
  function onSignUpClick() {
    props.onCloseLoginModal();
    props.onSignUpClick();
  }
  useEffect(() => {}, []);
  return (
    <LoginForm
      {...props}
      onSubmitForm={handleCloseModal}
      onSignUpClick={onSignUpClick}
    />
  );
};

export default LoginModal;
