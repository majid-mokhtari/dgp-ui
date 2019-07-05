import objectAssign from "object-assign";
import * as types from "../constants/types";
import { getCurrentUser } from "../lib/util";

const initialState = {
  authError: ""
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.USER_CHANGE_PASSWORD:
      return objectAssign({}, state, {
        authError: ""
      });

    case types.USER_CHANGE_EMAIL:
      return objectAssign({}, state, {
        isLoggedIn: false,
        authError: ""
      });
    case types.USER_CHANGE_NAME:
      return objectAssign({}, state, {
        authError: ""
      });
    case types.SERVER_ERROR:
      return objectAssign({}, state, {
        authError: action.err
      });
    default:
      return state;
  }
}
