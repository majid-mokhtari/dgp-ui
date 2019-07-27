import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  filters: ["all"],
  donations: [],
  selectedDonation: null,
  commentsByPartner: []
};

export default function donate(state = initialState, action) {
  switch (action.type) {
    case types.SET_FILTERS:
      return objectAssign({}, state, {
        viewState: types.SET_FILTERS,
        filters: action.filters
      });
    case types.DONATION_PARTNERS_RECEIVED:
      return objectAssign({}, state, {
        viewState: types.DONATION_PARTNERS_RECEIVED,
        donations: action.payload.donations
      });
    case types.DONATE_DETAILS_RECEIVED:
      return objectAssign({}, state, {
        viewState: types.DONATE_DETAILS_RECEIVED,
        selectedDonation: action.payload.selectedDonation
      });
    case types.COMMENTS_BY_PARTNER:
      return objectAssign({}, state, {
        viewState: types.COMMENTS_BY_PARTNER,
        commentsByPartner: action.payload.commentsByPartner
      });
    default:
      return state;
  }
}
