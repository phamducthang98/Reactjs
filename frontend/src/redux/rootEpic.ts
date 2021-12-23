import { combineEpics, Epic } from "redux-observable";
import { homeEpics } from "./home/home.epic";

const clientEpic: Epic = combineEpics(homeEpics);

// const adminEpic: Epic = (_action$, _store$, _dependencies) => combineEpics();

// export const rootEpic: Epic = combineEpics(clientEpic, adminEpic);
export const rootEpic: Epic = combineEpics(clientEpic);
