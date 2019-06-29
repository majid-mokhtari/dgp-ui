import React, { useState } from "react";
import { Button, Modal } from "antd";

// import LoginModal from "../../../auth/components/login";
// import SignUpModal from "../../../auth/components/signup";

import LoginForm from "../../../auth/components/login";
import SignUpForm from "../../../auth/components/signup";

export default function AuthButtons(props) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //should use useReducer but im lazy
  function onLoginClick() {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  }

  function onSignUpClick() {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  }

  function handleCloseModal() {
    setShowLoginModal(false);
    setShowSignUpModal(false);
  }

  const renderGenericModal = (Form, OnClick) => {
    return (
      <Modal visible={true} onCancel={handleCloseModal} footer={null}>
        <Form {...props} onSubmitForm={handleCloseModal} onClick={OnClick} />
      </Modal>
    );
  };

  const renderModal = (showLoginModal, showModal, showSignUpModal) => {
    if (showLoginModal) {
      return renderGenericModal(LoginForm, onSignUpClick);
    }
    if (showSignUpModal) {
      return renderGenericModal(SignUpForm, onLoginClick);
    }

    return null;
  };

  return (
    <div className="header-auth-btns">
      <Button type="primary" onClick={onSignUpClick}>
        Sign up
      </Button>
      <Button onClick={onLoginClick}>Log in</Button>
      {renderModal(showLoginModal, showModal, showSignUpModal)}
    </div>
  );
}
