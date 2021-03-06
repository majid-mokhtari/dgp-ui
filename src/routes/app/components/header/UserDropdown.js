import React, { useEffect } from "react";
import { Icon, Menu, Dropdown } from "antd";
import example from "./ned.png";
import styled from "styled-components";
import { Button } from "antd/lib/radio";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;
const StyledActivityIcon = styled.span`
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-right: 30px;
  }
`;
const StyledHeaderAvatar = styled.img`
  max-width: 60px;
  margin-right: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const StyledUserName = styled.span`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
`;
const StyledDropdownHeader = styled.div`
  display: flex;
  padding: 10px;
`;
const StyledMenuAvatar = styled.img`
  max-width: 80px;
  cursor: pointer;
`;
const StyledHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledName = styled.span``;

const StyledEmail = styled.span`
  margin-bottom: 10px;
`;

export default function UserDropdown(props) {
  const { getSelf, logoutUser, avatarUrl } = props;
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];
  const pathSub = pathArr[3];

  function onLogoutUser() {
    logoutUser();
  }
  useEffect(() => {
    getSelf();
  }, []);
  const menu = (
    <Menu style={{ width: "275px" }}>
      <Menu.Item>
        <StyledDropdownHeader>
          <StyledMenuAvatar
            src={avatarUrl || example}
            alt=""
            className="avatar"
          />
          <StyledHeaderInfo>
            <StyledName>{props.name}</StyledName>
            <StyledEmail>{props.email}</StyledEmail>
            <Button onClick={() => props.history.push("/app/member/home")}>
              View My Account
            </Button>
          </StyledHeaderInfo>
        </StyledDropdownHeader>
      </Menu.Item>

      <Menu.Item
        onClick={() => props.history.push("/app/member/points")}
        className={`${pathSub === "points" ? "active" : ""}`}
      >
        <span>MY POINTS</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => props.history.push("/app/member/donation")}
        className={`${pathSub === "donation" ? "active" : ""}`}
      >
        <span>MY DONATIONS</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => props.history.push("/app/member/comments")}
        className={`${pathSub === "comments" ? "active" : ""}`}
      >
        <span>COMMENTS</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => props.history.push("/app/member/favorites")}
        className={`${pathSub === "favorites" ? "active" : ""}`}
      >
        <span>MY FAVORITES</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => props.history.push("/app/member/account")}
        className={`${pathSub === "account" ? "active" : ""}`}
      >
        <span>SETTING</span>
      </Menu.Item>
      <Menu.Item onClick={() => onLogoutUser()}>
        <span>Log Out</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <StyledContainer>
      <StyledActivityIcon>
        <Icon type="bell" />
      </StyledActivityIcon>
      <Dropdown overlay={menu} placement="bottomCenter">
        <StyledHeaderAvatar src={avatarUrl || example} alt="" />
      </Dropdown>
      {/* <StyledUserName>Ned Stark</StyledUserName> */}
    </StyledContainer>
  );
}
