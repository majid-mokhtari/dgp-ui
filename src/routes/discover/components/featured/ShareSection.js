import React from "react";
import { Form, Button } from "antd";
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

const StyledDescription = styled.h2`
  font-size: 20px;
  color: #00c6c0;
  margin-bottom: 30px;
  text-align: center;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButtonIcon = styled.img`
  padding: 0 16px;
  border-radius: 2px;
  border: solid 0.5px #ff5344;
  color: #ff5344;
  cursor: pointer;
  border-right: none;
`;

const CommentForm = props => {
  const { featuredOffer } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledHeader>Like the Story? Share it!</StyledHeader>
      <StyledDescription>Earn 2 Points/Share</StyledDescription>
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

export default Form.create()(CommentForm);
