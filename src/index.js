import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { configureStore } from "./store";
import { saveState } from "./helpers/LocalStorage";
import throttle from "lodash/throttle";
const store = configureStore();
store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth,
    });
  }, 1000)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
