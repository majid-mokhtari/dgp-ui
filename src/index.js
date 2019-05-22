import React from "react";
import { render } from "react-dom";
import { configureStore, history } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import "./index.scss";

const store = configureStore();

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

render(
  <Root store={store} history={history} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
