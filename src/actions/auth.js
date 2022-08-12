import {
  AUTHENTICATION,
  CHANGE_SEARCH_BAR,
  REGISTER_COMPLETE,
  REGISTER_DOC_UID,
  REGISTER_EMAIL_NAME_PASS,
  REGISTER_TIME_SLOT,
} from "./actionTypes";
import { throttle } from "lodash";
import { APIUrls } from "../helpers/urls";

export function verification(data) {
  return {
    type: AUTHENTICATION,
    data,
  };
}
export function registerComplete() {
  return {
    type: REGISTER_COMPLETE,
  };
}
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
        dispatch(registerComplete());
      })
      .catch((error) => console.log(error));
  };
}, 300);

export const loginCollege = throttle((Uemail, Pass) => {
  return (dispatch) => {
    const url = APIUrls.loginCollege();
    let body = JSON.stringify({ Uemail: Uemail, Pass: Pass });
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
        dispatch(
          verification({
            Uemail: data.Uemail,
            UID: data.UID,
            verified: data.verified,
          })
        );
      })
      .catch((error) => console.log(error));
  };
}, 300);
