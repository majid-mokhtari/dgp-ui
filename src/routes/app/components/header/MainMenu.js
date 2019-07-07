import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 43%;
  justify-content: flex-end;
  display: flex;
  padding-right: 50px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: -45px;
`;
const StyledMenuItem = styled.li`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease-out;
  ::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #ff6363;
    position: relative;
    top: 19px;
    opacity: 0;
    transition: top 0.2s ease-out;
  }
  &:hover {
    color: #ff6363;
    transition: color 0.2s ease-in;
  }
  &:hover::after {
    top: 0;
    opacity: 1;
    transition: top 0.2s ease-in;
  }
`;

const StyledActiveMenuItem = styled.li`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: #ff6363;
  transition: color 0.2s ease-in;
  ::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #ff6363;
    position: relative;
    transition: top 0.2s ease-out;
    top: 0;
    opacity: 1;
  }
  &:hover {
    color: #ff6363;
    transition: color 0.2s ease-in;
  }
`;
const StyledHamburgerButton = styled.div`
  display: none;
  font-size: 30px;
  margin: 5px 10px;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

export default function MainMenu(props) {
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];
  const pathSub = pathArr[3];

  const menuItem = (l, i) => (
    <StyledMenuItem
      onClick={() => props.history.push(`/app/${l.path}`)}
      key={i}
    >
      {l.name}
    </StyledMenuItem>
  );

  const activeMenuItem = (l, i) => (
    <StyledActiveMenuItem
      onClick={() => props.history.push(`/app/${l.path}`)}
      key={i}
    >
      {l.name}
    </StyledActiveMenuItem>
  );

  const SubMenuDropdown = ({ item, i }) => {
    const subMenu = (
      <Menu>
        {item.subMenu.map((l, j) => {
          return (
            <Menu.Item
              onClick={() => props.history.push(`/app/${l.path}`)}
              key={j}
              className={`${pathSub === l.path.split("/")[1] ? "active" : ""}`}
            >
              <span>{l.name}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <Dropdown overlay={subMenu} key={item.i}>
        {item.path === path ? activeMenuItem(item, i) : menuItem(item, item.i)}
      </Dropdown>
    );
  };

  const menuItems = () => {
    const items = [
      { name: "Discover", path: "discover", subMenu: null },
      { name: "Donate", path: "donate", subMenu: null },
      {
        name: "About",
        path: "about",
        subMenu: [
          { name: "About Us", path: "about/us" },
          { name: "How it works", path: "about/how" }
        ]
      }
    ];
    return items.map((item, i) => {
      if (item.subMenu) {
        return <SubMenuDropdown item={item} i={i} key={i} />;
      } else {
        return item.path === path ? activeMenuItem(item, i) : menuItem(item, i);
      }
    });
  };

  return (
    <StyledContainer>
      <StyledHamburgerButton>
        <Icon type="menu-fold" />
      </StyledHamburgerButton>
      <StyledMenu>{menuItems()}</StyledMenu>
    </StyledContainer>
  );
}
