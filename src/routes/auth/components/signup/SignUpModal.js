import React from "react";
import { Modal } from "antd";
import SignupForm from "./SignUpForm";

export default function SignUpModal(props) {
  function handleCloseModal(e) {
    props.onCloseSignUpModal();
  }
  function onLoginClick() {
    props.onCloseSignUpModal();
    props.onLoginClick();
  }
  return (
    <SignupForm
      {...props}
      onSubmitForm={handleCloseModal}
      onLoginClick={onLoginClick}
    />
  );
}
