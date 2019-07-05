import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

import auth from "./auth";
import discover from "./discover";
import donate from "./donate";
import app from "./app";

const rootReducer = combineReducers({
  router,
  auth,
  discover,
  donate,
  app
});

export default rootReducer;
