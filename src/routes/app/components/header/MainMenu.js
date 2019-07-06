import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 43%;
  justify-content: flex-end;
  display: flex;
  padding-right: 50px;
`;

export default function MainMenu(props) {
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => props.history.push("/app/about/us")}>
          About Us
        </span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={() => props.history.push("/app/about/how")}>
          How it works
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <StyledContainer>
      <div className="header-menu-dropdown">
        <Icon type="menu-fold" />
      </div>
      <ul className="header-menu">
        <li
          className={`${path === "discover" ? "active" : ""}`}
          onClick={() => props.history.push("/app/discover")}
        >
          Discover
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/donate")}
        >
          Donate
        </li>
        <Dropdown overlay={menu}>
          <li className={`${path === "about" ? "active" : ""}`}>About</li>
        </Dropdown>
      </ul>
    </StyledContainer>
  );
}
