import React from "react";
import FeaturedDescription from "./FeaturedDescription";
import FeaturedMedia from "./FeaturedMedia";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  margin: 30px auto;
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
`;

const StyledHeader = styled.h1``;

export default function Featured(props) {
  function onFeaturedClick() {
    props.history.push("/app/discover/details/1");
  }
  return (
    <StyledContainer onClick={onFeaturedClick}>
      <StyledHeader>FEATURED STORY FOR YOU</StyledHeader>
      <StyledContent>
        <FeaturedMedia {...props} />
        <FeaturedDescription {...props} />
      </StyledContent>
    </StyledContainer>
  );
}
