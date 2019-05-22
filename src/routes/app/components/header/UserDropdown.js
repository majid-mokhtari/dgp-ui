import React from "react";
import { Icon, Menu, Dropdown } from "antd";
import example from "./ned.png";

export default function UserDropdown(props) {
  const { logoutUser, avatarUrl } = props;
  function onLogoutUser() {
    logoutUser();
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => onLogoutUser()}>Log Out</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header-dropdown">
      <Icon type="bell" className="activity" />
      <Dropdown overlay={menu}>
        <img src={avatarUrl || example} alt="" className="avatar" />
      </Dropdown>
      <span className="user-name">Ned Stark</span>
    </div>
  );
}
