import { createBrowserHistory } from "history";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";

import { rootEpic } from "redux/rootEpic";
import { rootReducer } from "redux/rootReducer";

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const middleware = [];
  middleware.push(epicMiddleware);
  middleware.push(routerMiddleware(history));

  if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");

    middleware.push(logger);
  }

  const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
