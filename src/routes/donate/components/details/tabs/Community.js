import React from "react";
import styled from "styled-components";
import TopComments from "../../../../discover/components/featured/TopComments";

const StyledContainer = styled.div`
  padding: 30px;
`;

export default function Community(props) {
  const { commentsByPartner } = props;
  console.log(commentsByPartner);
  return (
    <StyledContainer>
      <TopComments comments={commentsByPartner} />
    </StyledContainer>
  );
}
