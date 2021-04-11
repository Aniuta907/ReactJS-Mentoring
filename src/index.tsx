import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from 'history'

import App from "./App";
import { store } from "./store";

const newHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={newHistory}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
