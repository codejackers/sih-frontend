import {
  CHANGE_SEARCH_BAR,
  REGISTER_DOC_UID,
  REGISTER_EMAIL_NAME_PASS,
  REGISTER_TIME_SLOT,
} from "./actionTypes";
import { throttle } from "lodash";
import { APIUrls } from "../helpers/urls";

export function registerEmailNamePass(data) {
  return {
    type: REGISTER_EMAIL_NAME_PASS,
    data,
  };
}
export function registerSlot(data) {
  return {
    type: REGISTER_TIME_SLOT,
    data,
  };
}
export function registerUID(data) {
  return {
    type: REGISTER_DOC_UID,
    data,
  };
}

export const registerCollege = throttle(() => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const url = APIUrls.registerCollege();
    let body = JSON.stringify(auth.Registration);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
}, 300);
