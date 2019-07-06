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

export function getFeaturedOfferByPartner() {
  return dispatch => {
    axios
      .get(`${baseUrl}/dgp/v1/offers/partners/1`)
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

export function getFeaturedDetails(id) {
  return dispatch => {
    return dispatch(
      setFeaturedDetails({
        mediaUrl: "pvXPYhK_LiI",
        header: "60 More Measles Cases in a Weed - What You Need to Know",
        title:
          "The American Red Cross has been involved in a worldwide battle against measles for years and continues its global fight against the disease.",
        summary:
          "The American Red Cross has been involved in a worldwide battle againstmeasles for years and continues its global right against the disease",
        p:
          "May 6 (Reuters) - The number of measles cases reported in the United States this year rose by 60 last week, bringing the total number of cases so far in 2019 to 764, the U.S. Centers for Disease Control and Prevention said on Monday.The number was up 8.5 percent since the most recent tally of 704 last week. The cases are the highest since 1994, the CDC said bit.ly/2ZZRSUn."
      })
    );
  };
}

export function setFeaturedDetails(featuredDetails) {
  return {
    type: types.SET_FEATURED_DETAILS,
    featuredDetails
  };
}

export function subscribeUser(email) {
  return {
    type: types.SUBSCRIBE_USER,
    email
  };
}
