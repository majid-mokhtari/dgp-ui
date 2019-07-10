import React, { useEffect } from "react";
import { Form, Button, Input, Icon } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        props.form.setFieldsValue({
          comment: ""
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
          {getFieldDecorator("comment", {
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
