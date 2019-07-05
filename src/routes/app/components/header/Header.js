import React from "react";
import MainMenu from "./MainMenu";
import UserDropdown from "./UserDropdown";
import AuthButtons from "./AuthButtons";
import "./header.scss";

function Header(props) {
  const { getSelf, logoutUser, isLoggedIn, history, avatarUrl } = props;
  return (
    <div className="header">
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
    </div>
  );
}
export default Header;
