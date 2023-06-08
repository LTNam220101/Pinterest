import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from "./screens/Home/store";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
