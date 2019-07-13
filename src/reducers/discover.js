import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  filters: ["all"],
  featuredOffer: null,
  rssFeeds: [],
  trendingFeeds: [],
  featuredPartner: null,
  featuredComments: []
};

export default function discover(state = initialState, action) {
  switch (action.type) {
    case types.SET_FILTERS:
      return objectAssign({}, state, {
        viewState: types.SET_FILTERS,
        filters: action.filters
      });
    case types.FEATURED_OFFER_RECEIVED:
      return objectAssign({}, state, {
        viewState: types.FEATURED_OFFER_RECEIVED,
        featuredOffer: action.payload.featuredOffer
      });
    case types.FEATURED_PARTNER:
      return objectAssign({}, state, {
        viewState: types.FEATURED_PARTNER,
        featuredPartner: action.payload.featuredPartner
      });
    case types.FEATURED_COMMENTS:
      return objectAssign({}, state, {
        viewState: types.FEATURED_COMMENTS,
        featuredComments: action.payload.featuredComments
      });
    case types.RSS_FEEDS_RECEIVED:
      return objectAssign({}, state, {
        viewState: types.RSS_FEEDS_RECEIVED,
        rssFeeds: action.payload.feeds
      });
    case types.RSS_TRENDING_FEEDS_RECEIVED:
      return objectAssign({}, state, {
        viewState: types.RSS_TRENDING_FEEDS_RECEIVED,
        trendingFeeds: action.payload.trendingFeeds
      });
    case types.SUBSCRIBE_USER:
      return objectAssign({}, state, {
        email: action.email
      });
    default:
      return state;
  }
}
