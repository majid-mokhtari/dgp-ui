import * as types from "../../../constants/types";
import example from "./donate.png";
import logo from "./logo.jpg";

export const baseUrl =
  process.env.REACT_APP_DO_GOOD_URL || "http://localhost:8010";

export function getDonateDetails(id) {
  return dispatch => {
    return dispatch(
      setDonateDetails({
        id,
        image: example,
        tags: ["environment", "health", "animals"],
        title: `ant design`,
        logo: logo,
        summary:
          "We supply a series of design principles, practical patterns and high quality design",
        likes: 12200
      })
    );
  };
}

export function setDonateDetails(donateDetails) {
  return {
    type: types.SET_DONATE_DETAILS,
    donateDetails
  };
}

export function filterCards(res) {
  return dispatch => {
    return dispatch(setFilters(res));
  };
}

export function setFilters(filterTags) {
  return {
    type: types.SET_FILTERS,
    filters: filterTags
  };
}
