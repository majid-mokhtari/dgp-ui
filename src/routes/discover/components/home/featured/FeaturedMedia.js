import React from "react";
import YouTube from "../../../../../components/youTube/YouTube";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 5px;
  width: 100%;
`;

export default function FeaturedMedia(props) {
  const { featuredOffer } = props;
  if (!featuredOffer) return null;
  return (
    <StyledContainer>
      <YouTube
        video={featuredOffer.videoURL}
        autoplay="0"
        rel="0"
        modest="1"
        width="100%"
        height="300"
      />
    </StyledContainer>
  );
}
