import objectAssign from "object-assign";
import * as types from "../constants/types";
import { getCurrentUser } from "../lib/util";

const initialState = {
  isLoggedIn: getCurrentUser() ? true : false, //needs to be reversed after backend is done
  authError: "",
  avatarUrl: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return objectAssign({}, state, {
        viewState: types.USER_LOGGED_IN,
        isLoggedIn: true,
        authError: ""
      });

    case types.USER_LOGGED_OUT:
      return objectAssign({}, state, {
        isLoggedIn: false,
        viewState: types.USER_LOGGED_OUT,
        authError: ""
      });
    case types.USER_GET_SELF:
      return objectAssign({}, state, {
        isLoggedIn: action.payload,
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
