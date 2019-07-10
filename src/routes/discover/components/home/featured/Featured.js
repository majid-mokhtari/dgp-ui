import React from "react";
import FeaturedSummary from "./FeaturedSummary";
import FeaturedMedia from "./FeaturedMedia";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  padding: 15px 30px;
  margin: auto;
`;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
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
    props.history.push(`/app/discover/featured/partner/${offerID}`);
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
