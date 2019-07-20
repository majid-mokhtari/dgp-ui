import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 30px;
`;
const StyledRow = styled.div`
  display: flex;
  margin: 10px 0;
`;
const StyledGeneralInformation = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 20px;
`;
const StyledContactInformation = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDescription = styled.div`
  padding: 0 20px 10px 30px;
`;
const StyledTitle = styled.div`
  width: 10%;
`;

export default function About(props) {
  const { selectedDonation } = props;
  return (
    <StyledContainer>
      <StyledGeneralInformation>
        <h2>General Information</h2>
        <StyledRow>
          <StyledTitle>About</StyledTitle>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: selectedDonation.aboutHTML }}
          />
        </StyledRow>
        <StyledRow>
          <StyledTitle>Mission</StyledTitle>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: selectedDonation.aboutHTML }}
          />
        </StyledRow>
      </StyledGeneralInformation>
      <StyledContactInformation>
        <h2>Contact Information</h2>
        <StyledRow>
          <StyledTitle>Tell</StyledTitle>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: selectedDonation.phone }}
          />
        </StyledRow>
        <StyledRow>
          <StyledTitle>Email</StyledTitle>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: selectedDonation.email }}
          />
        </StyledRow>
        <StyledRow>
          <StyledTitle>Website</StyledTitle>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: selectedDonation.website }}
          />
        </StyledRow>
      </StyledContactInformation>
    </StyledContainer>
  );
}
