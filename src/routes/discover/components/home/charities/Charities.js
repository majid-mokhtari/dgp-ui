import React from "react";
import Home from "../../../../donate/components/home/Home";
import styled from "styled-components";

const StyledCharitiesContainer = styled.div`
  margin-top: 20px;
`;
const StyledCharitiesHeader = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export default function Charities(props) {
  return (
    <StyledCharitiesContainer>
      <StyledCharitiesHeader>
        <h1>You Might Be Interested In Donating To Them</h1>
        <h3>Donate to the causes that you support and earn points</h3>
      </StyledCharitiesHeader>
      <Home {...props} />
    </StyledCharitiesContainer>
  );
}
