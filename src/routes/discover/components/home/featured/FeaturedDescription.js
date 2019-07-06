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
  const { featuredOffer } = props;
  if (!featuredOffer) return null;
  return (
    <StyledContainer>
      <StyledTitle>{featuredOffer.title}</StyledTitle>
      <StyledAuthor>{featuredOffer.author}</StyledAuthor>
      <StyledDescription>{featuredOffer.subTitle}</StyledDescription>
    </StyledContainer>
  );
}
