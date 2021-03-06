import React from "react";
import Home from "../../../../donate/components/home/Home";
import styled from "styled-components";

const StyledCharitiesContainer = styled.div`
  margin-top: 20px;
  mpadding-bottom: 30px;
`;
const StyledCharitiesHeader = styled.div`
  text-align: center;
  padding-top: 30px;
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
