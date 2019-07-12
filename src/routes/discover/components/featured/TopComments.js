import React, { useEffect } from "react";
import { Form, Button, Input, Icon } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 0 70px 0;
  border-top: 1px solid #bcbcbc;
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 60px;
`;

const StyledHeader = styled.h1`
  text-align: left;
`;

const TopComments = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledHeader>Top Comments</StyledHeader>
    </StyledContainer>
  );
};

export default Form.create()(TopComments);
