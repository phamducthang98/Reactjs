import React from "react";
import Config from "configs";
import ReactDOM from "react-dom";
import { Router } from "routes/Route";
import { Provider } from "react-redux";
import reportWebVitals from "reportWebVitals";
import { configLocalization } from "utils/localization";
import configureStore, { history } from "redux/store";
import { ConnectedRouter } from "connected-react-router";
import "./index.scss";

const store = configureStore();

Config.initConfig()
  .then(() => {
    configLocalization(); // init localization
    console.log("Before Load App");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router />
          {/* <ConnectedRouter history={history}>
          </ConnectedRouter> */}
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  });
