import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  categories: [
    {
      categoryID: "all",
      description: "All"
    }
  ]
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.CATEGORIES_RECEIVED:
      return objectAssign({}, state, {
        viewState: types.CATEGORIES_RECEIVED,
        categories: [...state.categories, ...action.payload.categories]
      });
    default:
      return state;
  }
}
