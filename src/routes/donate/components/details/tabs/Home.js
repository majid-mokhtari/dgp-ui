import React from "react";
import YouTube from "../../../../../components/youTube/YouTube";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 30px;
`;
const StyledDonateLink = styled.div`
  text-align: center;
  margin-top: 20px;
  a {
    font-size: 16px;
    color: #00c6c0 !important;
  }
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;
const StyledAboutDescription = styled.div`
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
const StyledImpactDescription = styled.div`
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export default function Home(props) {
  const { selectedDonation } = props;
  return (
    <StyledContainer>
      <h2>About</h2>
      <StyledAboutDescription
        dangerouslySetInnerHTML={{ __html: selectedDonation.aboutHTML }}
      />

      <h2>Feature Content</h2>
      <YouTube
        video="pvXPYhK_LiI"
        width="100%"
        height="400"
        autoplay="0"
        rel="0"
        modest="1"
      />
      <StyledDonateLink>
        <a href={selectedDonation.website} target="_blank">
          Read Full Article
        </a>
      </StyledDonateLink>
      <h2>Impact</h2>
      <StyledImpactDescription
        dangerouslySetInnerHTML={{ __html: selectedDonation.impactHTML }}
      />
    </StyledContainer>
  );
}
