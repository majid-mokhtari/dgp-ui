import React from "react";
import MainMenu from "./MainMenu";
import UserDropdown from "./UserDropdown";
import AuthButtons from "./AuthButtons";
import styled from "styled-components";
import { Icon } from "antd";

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
const StyledLogoContainer = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
const StyledHamburgerButton = styled.div`
  display: none;
  font-size: 30px;
  margin: 5px 30px;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const StyledLogo = styled.img`
  width: 110px;
`;

function Header(props) {
  const { getSelf, logoutUser, isLoggedIn, history, avatarUrl } = props;
  return (
    <StyledContainer>
      <StyledHamburgerButton>
        <Icon type="menu-fold" />
      </StyledHamburgerButton>
      <StyledLogoContainer onClick={() => props.history.push("/app")}>
        <StyledLogo
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="do-good-points-logo"
        />
      </StyledLogoContainer>
      <MainMenu history={history} />
      {isLoggedIn ? (
        <UserDropdown
          getSelf={getSelf}
          logoutUser={logoutUser}
          avatarUrl={avatarUrl}
          {...props}
        />
      ) : (
        <AuthButtons {...props} />
      )}
    </StyledContainer>
  );
}
export default Header;
