import axios from "axios";
import * as util from "../../../lib/util.js";
import * as types from "../../../constants/types";

export const baseUrl =
  process.env.REACT_APP_DO_GOOD_URL || "http://localhost:8000";

export function getSelf(request) {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/member/self`, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function changeEmail(request) {
  return dispatch => {
    axios
      .put(`${baseUrl}/dgp/v1/member/email`, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function changePassword(data) {
  return dispatch => {
    axios
      .put(`${baseUrl}/dgp/v1/member/password`, data, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function changeName(request) {
  return dispatch => {
    axios
      .put(`${baseUrl}/dgp/v1/member/profile`, { withCredentials: true })
      .then(res => {
        console.log(res);
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}
