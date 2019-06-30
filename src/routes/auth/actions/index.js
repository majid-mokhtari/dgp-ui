import axios from "axios";
import * as util from "../../../lib/util.js";
import * as types from "../../../constants/types";

export const baseUrl =
  process.env.REACT_APP_DO_GOOD_URL || "http://localhost:8000";

export function loginRequest(request) {
  return dispatch => {
    axios
      .post(`${baseUrl}/dgp/v1/member/login`, request)
      .then(res => {
        return dispatch(userLoggedIn(res));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function signUpRequest(request) {
  return dispatch => {
    axios
      .post(`${baseUrl}/users/signup`, request)
      .then(res => {
        return dispatch(userLoggedIn(res));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function logoutUser() {
  const token = util.getCurrentUser();
  const headers = { token };
  return dispatch => {
    axios
      .delete(`${baseUrl}/dgp/v1/member/logout`, { headers })
      .then(res => {
        return dispatch(userLoggedOut(res));
      })
      .catch(err => {
        return dispatch(util.onServerError(err));
      });
  };
}

function userLoggedIn(res) {
  util.storeCurrentUser(res.headers);
  return {
    type: types.USER_LOGGED_IN,
    payload: res.data
  };
}

function userLoggedOut(res) {
  util.logoutUser(res.headers);
  return {
    type: types.USER_LOGGED_OUT,
    payload: res.data
  };
}
