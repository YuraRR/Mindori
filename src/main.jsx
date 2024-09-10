import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
