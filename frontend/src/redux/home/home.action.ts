import { IEpicAction } from "models/bases";

export const INIT_HOME_PAGE = "[home] INIT_HOME_PAGE";

export const initHomePage = (payload?: any): IEpicAction => ({
  type: INIT_HOME_PAGE,
  payload,
});
