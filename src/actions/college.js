import { APIUrls } from "../helpers/urls";
import { SAVE_COLLEGE_DATA } from "./actionTypes";
import { throttle } from "lodash";

export function saveCollegeData(data) {
  return {
    type: SAVE_COLLEGE_DATA,
    data,
  };
}
// API Calls
export function getAllCollege() {
  return (dispatch) => {
    const url = APIUrls.getAllCollege();

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        dispatch(saveCollegeData(data));
      })
      .catch((error) => console.log(error));
  };
}
export function filterCollege(city) {
  return (dispatch) => {
    const url = APIUrls.filterCollege() + `?city=${city}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        dispatch(saveCollegeData(data));
      })
      .catch((error) => console.log(error));
  };
}

export const getCollege = throttle((name) => {
  return (dispatch) => {
    const url = APIUrls.getCollege(name);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        dispatch(saveCollegeData(data));
      })
      .catch((error) => console.log(error));
  };
}, 300);

export const updateCollege = throttle((data) => {
  return (dispatch) => {
    const url = APIUrls.updateCollege();
    let body = JSON.stringify(data);
    fetch(url, {
      method: "PUT",
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

export const createCourse = throttle((data) => {
  return (dispatch) => {
    const url = APIUrls.createCourse();
    let body = JSON.stringify(data);
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
export const deleteCourse = throttle((data) => {
  return (dispatch) => {
    const url = APIUrls.deleteCourse();
    let body = JSON.stringify(data);
    fetch(url, {
      method: "DELETE",
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
