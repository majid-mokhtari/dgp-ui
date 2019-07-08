import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import LoginForm from "../../../auth/components/login";
import SignUpForm from "../../../auth/components/signup";
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

  useEffect(() => {
    if (props.authError === "fail") {
    }
    if (props.isLoggedIn && props.authError === "") {
      handleCloseModal();
    }
  }, [props.authError, props.isLoggedIn]);

  const renderGenericModal = (Form, OnClick) => {
    return (
      <Modal visible={true} onCancel={handleCloseModal} footer={null}>
        <Form {...props} onSubmitForm={handleCloseModal} onClick={OnClick} />
      </Modal>
    );
  };

  const renderModal = (showLoginModal, showSignUpModal) => {
    if (showLoginModal) {
      return renderGenericModal(LoginForm, onSignUpClick);
    }
    if (showSignUpModal) {
      return renderGenericModal(SignUpForm, onLoginClick);
    }

    return null;
  };

  return (
    <StyledContainer>
      <Button type="primary" onClick={onSignUpClick}>
        Sign up
      </Button>
      <Button onClick={onLoginClick}>Log in</Button>
      {renderModal(showLoginModal, showSignUpModal)}
    </StyledContainer>
  );
}
