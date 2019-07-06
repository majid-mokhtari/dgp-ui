import React from "react";
import MainMenu from "./MainMenu";
import UserDropdown from "./UserDropdown";
import AuthButtons from "./AuthButtons";
import "./header.scss";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  background: #fff;
  margin-bottom: 7px;
  position: fixed;
  z-index: 1;
`;
const StyledLogo = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header(props) {
  const { getSelf, logoutUser, isLoggedIn, history, avatarUrl } = props;
  return (
    <StyledContainer>
      <StyledLogo>
        <h2>Do Good Points Logo</h2>
      </StyledLogo>
      <MainMenu history={history} />
      {isLoggedIn ? (
        <UserDropdown
          getSelf={getSelf}
          logoutUser={logoutUser}
          avatarUrl={avatarUrl}
        />
      ) : (
        <AuthButtons {...props} />
      )}
    </StyledContainer>
  );
}
export default Header;
