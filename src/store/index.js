import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers";
import { loadState } from "../helpers/LocalStorage";

let store;
const persistedState = loadState();
export function configureStore() {
  store = createStore(reducer, persistedState, applyMiddleware(thunk, logger));
  return store;
}
