import React from "react";
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
`;
const StyledHeaderAvatar = styled.img`
  max-width: 60px;
  margin-right: 10px;
  cursor: pointer;
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
  ccursor: pointer;
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
  console.log(path, pathSub);

  function onLogoutUser() {
    logoutUser();
  }
  function onGetSelf() {
    getSelf();
  }
  const menu = (
    <Menu style={{ width: "275px" }}>
      <StyledDropdownHeader>
        <StyledMenuAvatar
          src={avatarUrl || example}
          alt=""
          className="avatar"
        />
        <StyledHeaderInfo>
          <StyledName>Majid Mokhtari</StyledName>
          <StyledEmail>majidmokht@gmail.com</StyledEmail>
          <Button onClick={() => props.history.push("/app/member/home")}>
            View My Account
          </Button>
        </StyledHeaderInfo>
      </StyledDropdownHeader>
      <Menu.Item className={`${pathSub === "points" ? "active" : ""}`}>
        <span onClick={() => props.history.push("/app/member/points")}>
          MY POINTS
        </span>
      </Menu.Item>
      <Menu.Item className={`${pathSub === "donation" ? "active" : ""}`}>
        <span onClick={() => props.history.push("/app/member/donation")}>
          MY DONATIONS
        </span>
      </Menu.Item>
      <Menu.Item className={`${pathSub === "comments" ? "active" : ""}`}>
        <span onClick={() => props.history.push("/app/member/comments")}>
          COMMENTS
        </span>
      </Menu.Item>
      <Menu.Item className={`${pathSub === "favorites" ? "active" : ""}`}>
        <span onClick={() => props.history.push("/app/member/favorites")}>
          MY FAVORITES
        </span>
      </Menu.Item>
      <Menu.Item className={`${pathSub === "account" ? "active" : ""}`}>
        <span onClick={() => props.history.push("/app/member/account")}>
          SETTING
        </span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={() => onLogoutUser()}>Log Out</span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={() => onGetSelf()}>Get Self (test)</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <StyledContainer>
      <StyledActivityIcon>
        <Icon type="bell" />
      </StyledActivityIcon>
      <Dropdown overlay={menu}>
        <StyledHeaderAvatar src={avatarUrl || example} alt="" />
      </Dropdown>
      <StyledUserName>Ned Stark</StyledUserName>
    </StyledContainer>
  );
}
