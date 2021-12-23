import { Observable, of, switchMap } from "rxjs";
import { combineEpics, ofType } from "redux-observable";
import * as homeAction from "./home.action";

const initHomePageEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(homeAction.INIT_HOME_PAGE),
    switchMap((action) => {
      return of();
    })
  );

export const homeEpics = combineEpics(initHomePageEpic);
