import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  filters: ["all"],
  featuredDetails: null
};

export default function discover(state = initialState, action) {
  switch (action.type) {
    case types.SET_FILTERS:
      return objectAssign({}, state, {
        viewState: types.SET_FILTERS,
        filters: action.filters
      });
    case types.SET_FEATURED_DETAILS:
      return objectAssign({}, state, {
        viewState: types.SET_FEATURED_DETAILS,
        featuredDetails: action.featuredDetails
      });
    default:
      return state;
  }
}
