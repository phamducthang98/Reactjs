import { IEpicAction } from "models/bases";

const initialState = {
  name: "",
};

export const homeReducer = (state = initialState, actions: IEpicAction) => {
  const cpState = Object.assign(state, {});
  switch (actions.type) {
    default:
      return cpState;
  }
};
