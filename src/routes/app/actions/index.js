import axios from "axios";
import * as util from "../../../lib/util.js";
import * as types from "../../../constants/types";

export const baseUrl =
  process.env.REACT_APP_DO_GOOD_URL || "http://localhost:8000";

export function getCategories() {
  return dispatch => {
    axios
      .get(`/mock/categories.json`)
      .then(({ data }) => {
        const { Categories } = data.data;
        return dispatch(setCategories({ categories: Categories }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setCategories(payload) {
  return {
    type: types.CATEGORIES_RECEIVED,
    payload
  };
}
