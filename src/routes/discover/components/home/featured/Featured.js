import React from "react";
import FeaturedSummary from "./FeaturedSummary";
import FeaturedMedia from "./FeaturedMedia";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 24px 96px;
  margin: auto;
`;
const StyledContent = styled.div`
  border-top: 8px solid #02c6c0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  transition: box-shadow 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 5px 9px 0px #888888;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: normal;
`;

export default function Featured(props) {
  function onFeaturedClick() {
    const { offerID } = props.featuredOffer;
    props.history.push(`/app/discover/featured/offer/${offerID}`);
  }
  return (
    <StyledContainer onClick={onFeaturedClick}>
      <StyledHeader>FEATURED STORY FOR YOU</StyledHeader>
      <StyledContent>
        <FeaturedMedia {...props} />
        <FeaturedSummary {...props} />
      </StyledContent>
    </StyledContainer>
  );
}
