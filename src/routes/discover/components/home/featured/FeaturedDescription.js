import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #fff;
  height: 300px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.h2``;
const StyledAuthor = styled.span``;
const StyledDescription = styled.p`
  flex: 2;
`;
export default function FeaturedDescription(props) {
  return (
    <StyledContainer>
      <StyledTitle>
        60 More Measles Cases in a Weed - What You Need to Know
      </StyledTitle>
      <StyledAuthor>Owen Williams in Red Cross</StyledAuthor>
      <StyledDescription>
        The American Red Cross has been involved in a worldwide battle against
        measles for years and continues its global right against the disease
      </StyledDescription>
    </StyledContainer>
  );
}
