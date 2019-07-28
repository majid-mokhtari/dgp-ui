import React from "react";
import styled from "styled-components";
import TopComments from "../../../../discover/components/featured/TopComments";
import CommentForm from "./CommentForm";

const StyledContainer = styled.div`
  padding: 30px;
`;

export default function Community(props) {
  const { commentsByPartner } = props;
  return (
    <StyledContainer>
      <CommentForm {...props} />
      <TopComments comments={commentsByPartner} />
    </StyledContainer>
  );
}
