import axios from "axios";
import * as util from "../../../lib/util.js";
import * as types from "../../../constants/types";

export const baseUrl =
  process.env.REACT_APP_DO_GOOD_URL || "http://localhost:8000";

export function getDonationPartners() {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/partners`)
      .then(({ data }) => {
        const { Partners } = data.data;
        return dispatch(setDonationPartners({ donations: Partners }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function getDonateDetails(id) {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/partners/${id}`)
      .then(({ data }) => {
        const { Partner } = data.data;
        return dispatch(setDonationDetails({ selectedDonation: Partner }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function getCommentsByPartner(partnerId) {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/social/comments/partners/${partnerId}`)
      .then(({ data }) => {
        const { comments } = data.data;
        return dispatch(setCommentsByPartner({ commentsByPartner: comments }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setCommentsByPartner(payload) {
  return {
    type: types.COMMENTS_BY_PARTNER,
    payload
  };
}

export function addComment(request) {
  return dispatch => {
    axios
      .post(`${baseUrl}/dgp/v1/social/comments`, request)
      .then(({ data }) => {
        const { partnerID } = data.data.comment;
        return dispatch(getCommentsByPartner(partnerID));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setDonationDetails(payload) {
  return {
    type: types.DONATE_DETAILS_RECEIVED,
    payload
  };
}

export function setDonationPartners(payload) {
  return {
    type: types.DONATION_PARTNERS_RECEIVED,
    payload
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
