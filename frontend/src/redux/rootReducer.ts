import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { homeReducer } from "./home/home.reducer";

export const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    homeReducer,
  });
