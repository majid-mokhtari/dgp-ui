import React from "react";
import YouTube from "../../../../../components/youTube/YouTube";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 5px;
`;

export default function FeaturedMedia() {
  return (
    <StyledContainer>
      <YouTube
        video="pvXPYhK_LiI"
        autoplay="0"
        rel="0"
        modest="1"
        width="400"
        height="300"
      />
    </StyledContainer>
  );
}
