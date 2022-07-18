import { combineReducers } from "redux";
import auth from "./auth";
import changes from "./changes";
export default combineReducers({
  auth,
  changes,
});
