import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  filters: ["all"],
  donateDetails: null
};

export default function donate(state = initialState, action) {
  switch (action.type) {
    case types.SET_FILTERS:
      return objectAssign({}, state, {
        viewState: types.SET_FILTERS,
        filters: action.filters
      });
    case types.SET_DONATE_DETAILS:
      return objectAssign({}, state, {
        viewState: types.SET_DONATE_DETAILS,
        donateDetails: action.donateDetails
      });
    default:
      return state;
  }
}
