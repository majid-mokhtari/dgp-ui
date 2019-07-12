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
  text-align: center;
`;

const TopComments = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledButtonContainer>
        <StyledButtonIcon
          src={`${process.env.PUBLIC_URL}/images/discussion.svg`}
          alt="do-good-points-discussion"
        />

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/sharer/sharer.php?u=http://www.dogoodspoint.com?one"
          className="fb-xfbml-parse-ignore"
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ height: "48px", width: "170px" }}
          >
            Spread Some Love
          </Button>
        </a>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Form.create()(TopComments);
