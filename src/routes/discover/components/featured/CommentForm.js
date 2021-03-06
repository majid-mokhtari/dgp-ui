import React, { useEffect } from "react";
import { Form, Button, Input, Icon } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 50px;
  margin-top: 50px;
`;
const StyledHeader = styled.h1``;

const StyledDescription = styled.h2`
  font-size: 20px;
  color: #00c6c0;
  margin-bottom: 30px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  const { featuredOffer, form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, { content }) => {
      if (!err) {
        const { partnerID, offerID } = featuredOffer;
        props.actions.addComment({
          partnerID,
          content,
          offerID
        });
        props.form.setFieldsValue({
          content: ""
        });
      }
    });
  };
  useEffect(() => {}, []);

  if (!featuredOffer) return null;
  return (
    <StyledContainer>
      <StyledHeader>Join the Discussion</StyledHeader>
      <StyledDescription>Earn 2 Points/Commenting</StyledDescription>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("content", {
            rules: [{ required: true, message: "Say Something!" }]
          })(<TextArea rows={4} placeholder="Say Something..." />)}
        </Form.Item>
        <Form.Item>
          <StyledButtonContainer>
            <StyledButtonIcon
              src={`${process.env.PUBLIC_URL}/images/discussion.svg`}
              alt="do-good-points-discussion"
            />
            <Button
              type="primary"
              htmlType="submit"
              style={{ height: "48px", width: "170px" }}
            >
              Post
            </Button>
          </StyledButtonContainer>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default Form.create()(CommentForm);
