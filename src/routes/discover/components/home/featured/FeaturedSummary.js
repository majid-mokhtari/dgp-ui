import React from "react";
import styled from "styled-components";
import * as util from "../../../../../lib/util";

const StyledContainer = styled.div`
  background-color: #fff;
  height: 300px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.h2``;
const StyledAuthor = styled.span`
  margin: 10px 0;
`;
const StyledDescription = styled.p`
  flex: 2;
`;
const StyledLikesContainer = styled.div``;

export default function FeaturedSummary(props) {
  const { featuredOffer } = props;
  if (!featuredOffer) return null;
  return (
    <StyledContainer>
      <StyledTitle>{featuredOffer.title}</StyledTitle>
      <StyledAuthor>{featuredOffer.author}</StyledAuthor>
      <StyledDescription>{featuredOffer.subTitle}</StyledDescription>
      <StyledLikesContainer>
        {`${util.intToString(featuredOffer.likeCount)} Likes`}
      </StyledLikesContainer>
    </StyledContainer>
  );
}
