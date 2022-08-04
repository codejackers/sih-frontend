import { APIUrls } from "../helpers/urls";
import { SAVE_COLLEGE_DATA } from "./actionTypes";

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
        console.log(response.ok);
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
