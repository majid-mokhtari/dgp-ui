import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

import auth from "./auth";
import discover from "./discover";
import donate from "./donate";
import app from "./app";
import member from "./member";

const rootReducer = combineReducers({
  router,
  auth,
  discover,
  donate,
  app,
  member
});

export default rootReducer;
