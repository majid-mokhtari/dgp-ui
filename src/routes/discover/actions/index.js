import axios from "axios";
import * as util from "../../../lib/util.js";
import * as types from "../../../constants/types";

export const baseUrl =
  process.env.REACT_APP_DO_GOOD_URL || "http://localhost:8000";

export function subscribe(email) {
  return dispatch => {
    axios
      .post(`${baseUrl}/dgp/v1/subscribers/subscribe`, email)
      .then(({ data }) => {
        return dispatch(subscribeUser({ email }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

export function getFeaturedOfferByPartner(partnerId) {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/offers/partners/${partnerId}/types/DFC`)
      .then(({ data }) => {
        const { offers } = data.data;
        return dispatch(
          setFeaturedOfferByPartner({ featuredOffer: offers[0] })
        );
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setFeaturedOfferByPartner(payload) {
  return {
    type: types.FEATURED_OFFER_RECEIVED,
    payload
  };
}

export function getFeaturedPartner(partnerId) {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/partners/${partnerId}`)
      .then(({ data }) => {
        const { Partner } = data.data;
        return dispatch(setFeaturedPartner({ featuredPartner: Partner }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setFeaturedPartner(payload) {
  return {
    type: types.FEATURED_PARTNER,
    payload
  };
}

export function getRssFeeds() {
  return dispatch => {
    axios
      .get(
        `${baseUrl}/dgp/v1/feeds?cids=animals,health,social,community,human_svc,humanity,public_svc,social`
      )
      .then(({ data }) => {
        const { feeds } = data.data;
        return dispatch(setRssFeeds({ feeds }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setRssFeeds(payload) {
  return {
    type: types.RSS_FEEDS_RECEIVED,
    payload
  };
}

export function getTrendingRssFeeds() {
  return dispatch => {
    axios
      .get(
        `${baseUrl}/dgp/v1/feeds/trending?cids=animals,health,social,community,human_svc,humanity,public_svc,social`
      )
      .then(({ data }) => {
        const { feeds } = data.data;
        return dispatch(setTrendingRssFeeds({ trendingFeeds: feeds }));
      })
      .catch(({ response }) => {
        if (response) {
          return dispatch(util.onServerError(response));
        }
      });
  };
}

function setTrendingRssFeeds(payload) {
  return {
    type: types.RSS_TRENDING_FEEDS_RECEIVED,
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

export function subscribeUser(email) {
  return {
    type: types.SUBSCRIBE_USER,
    email
  };
}
