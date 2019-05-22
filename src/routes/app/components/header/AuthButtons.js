import React, { useState } from "react";
import { Button } from "antd";
import LoginModal from "../../../auth/components/login";
import SignUpModal from "../../../auth/components/signup";

export default function AuthButtons(props) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  function onLoginClick() {
    setShowLoginModal(true);
  }
  function onCloseLoginModal() {
    setShowLoginModal(false);
  }
  function onSignUpClick() {
    setShowSignUpModal(true);
  }
  function onCloseSignUpModal() {
    setShowSignUpModal(false);
  }
  const loginModal = showLoginModal ? (
    <LoginModal
      {...props}
      onCloseLoginModal={onCloseLoginModal}
      onSignUpClick={onSignUpClick}
    />
  ) : null;
  const signUpModal = showSignUpModal ? (
    <SignUpModal
      {...props}
      onCloseSignUpModal={onCloseSignUpModal}
      onLoginClick={onLoginClick}
    />
  ) : null;
  return (
    <div className="header-auth-btns">
      <Button type="primary" onClick={onSignUpClick}>
        Sign up
      </Button>
      <Button onClick={onLoginClick}>Log in</Button>
      {loginModal}
      {signUpModal}
    </div>
  );
}
