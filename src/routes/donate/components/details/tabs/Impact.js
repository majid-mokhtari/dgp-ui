import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 20px;
`;
const StyledDescription = styled.div`
  padding: 10px 0;
`;

export default function Impact(props) {
  const { selectedDonation } = props;
  return (
    <StyledContainer>
      <h3>The Challenge</h3>
      <StyledDescription
        dangerouslySetInnerHTML={{ __html: selectedDonation.impactHTML }}
      />
      <h3>How we do it</h3>
      <StyledDescription
        dangerouslySetInnerHTML={{ __html: selectedDonation.impactHTML }}
      />
    </StyledContainer>
  );
}
