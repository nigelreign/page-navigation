import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./setup/redux/serviceWorker";
import withReduxFeatures from "./setup/redux/withReduxFeatures";

const WrappedApp = withReduxFeatures(App);


ReactDOM.render(
  <Router>
    <WrappedApp />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
