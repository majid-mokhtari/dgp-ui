import Cookies from "js.cookie";
import * as types from "../constants/types";

const COOKIE_PATH = "DO_GOOD_USER";

export function storeCurrentUser({ token }) {
  Cookies.set(COOKIE_PATH, document.cookie);
}

export function getCurrentUser() {
  const currentUser = Cookies.get(COOKIE_PATH);
  if (currentUser) {
    return currentUser;
  }
  return null;
}

export function logoutUser() {
  Cookies.remove(COOKIE_PATH);
}

export function onServerError({ data, response }) {
  if (response && response.status === 401) {
    logoutUser();
  }
  const { status } = data;
  return {
    type: types.SERVER_ERROR,
    err: status
  };
}

export function intToString(value) {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  return shortValue + suffixes[suffixNum];
}
export const visibleY = function(el) {
  var rect = el.getBoundingClientRect(),
    top = rect.top,
    height = rect.height,
    el = el.parentNode;
  // Check if bottom of the element is off the page
  if (rect.bottom < 60) return false;
  // Check its within the document viewport
  if (top > document.documentElement.clientHeight) return false;
  do {
    rect = el.getBoundingClientRect();
    if (top <= rect.bottom === false) return false;
    // Check if the element is out of view due to a container scrolling
    if (top + height <= rect.top) return false;
    el = el.parentNode;
  } while (el != document.body);
  return true;
};
