import React from "react";
import MainMenu from "./MainMenu";
import UserDropdown from "./UserDropdown";
import AuthButtons from "./AuthButtons";
import "./header.scss";

//change back false to isLoggedIn
function Header(props) {
  const { logoutUser, isLoggedIn, history, avatarUrl } = props;
  return (
    <div className="header">
      <MainMenu history={history} />
      {false ? (
        <UserDropdown logoutUser={logoutUser} avatarUrl={avatarUrl} />
      ) : (
        <AuthButtons {...props} />
      )}
    </div>
  );
}
export default Header;
