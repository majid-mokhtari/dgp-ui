import React, { useEffect } from "react";
import Header from "../../app/components/header/Header";
import "./auth.scss";

export default function Auth(props) {
  const { history, isLoggedIn } = props;
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/app");
    }
  });
  return (
    <div className="auth-container">
      <Header history={history} isLoggedIn={isLoggedIn} />
    </div>
  );
}
