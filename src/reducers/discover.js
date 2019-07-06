import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  filters: ["all"],
  featuredDetails: null,
  rssFeeds: [],
  trendingFeeds: []
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
