import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import LoginForm from "../../../auth/components/login";
import SignUpForm from "../../../auth/components/signup";
import ForgotPasswordForm from "../../../auth/components/forgotPassword";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  margin-right: 20px;
  margin-top: 2px;
  width: 200px;
  justify-content: space-around;
  margin-top: 13px;
  @media only screen and (max-width: 767px) {
    width: 80%;
  }
`;

export default function AuthButtons(props) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  //should use useReducer but im lazy
  function onLoginClick() {
    setShowLoginModal(true);
    setShowSignUpModal(false);
    setShowForgotPasswordModal(false);
  }

  function onSignUpClick() {
    setShowSignUpModal(true);
    setShowLoginModal(false);
    setShowForgotPasswordModal(false);
  }

  function onForgotPasswordClick() {
    setShowForgotPasswordModal(true);
    setShowSignUpModal(false);
    setShowLoginModal(false);
  }

  function onBack() {
    setShowForgotPasswordModal(false);
    setShowSignUpModal(false);
    setShowLoginModal(true);
  }

  function handleCloseModal() {
    setShowLoginModal(false);
    setShowSignUpModal(false);
    setShowForgotPasswordModal(false);
  }

  useEffect(() => {
    if (props.authError === "fail") {
    }
    if (props.isLoggedIn && props.authError === "") {
      handleCloseModal();
    }
  }, [props.authError, props.isLoggedIn]);

  const renderGenericModal = (Form, OnClick, ForgotPasswordClick) => {
    return (
      <Modal visible={true} onCancel={handleCloseModal} footer={null}>
        <Form
          {...props}
          onSubmitForm={handleCloseModal}
          onClick={OnClick}
          onForgotPasswordClick={ForgotPasswordClick}
        />
      </Modal>
    );
  };

  const renderModal = (
    showLoginModal,
    showSignUpModal,
    showForgotPasswordModal
  ) => {
    if (showLoginModal) {
      return renderGenericModal(
        LoginForm,
        onSignUpClick,
        onForgotPasswordClick
      );
    }
    if (showSignUpModal) {
      return renderGenericModal(
        SignUpForm,
        onLoginClick,
        onForgotPasswordClick
      );
    }
    if (showForgotPasswordModal) {
      return renderGenericModal(ForgotPasswordForm, onBack);
    }

    return null;
  };

  return (
    <StyledContainer>
      <Button type="primary" onClick={onSignUpClick}>
        Sign up
      </Button>
      <Button onClick={onLoginClick}>Log in</Button>
      {renderModal(showLoginModal, showSignUpModal, showForgotPasswordModal)}
    </StyledContainer>
  );
}
