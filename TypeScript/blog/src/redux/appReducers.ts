import { SHOW_LOADER, HIDE_LOADER, IAction } from "./types";

//actions
export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

const initialState = {
  loading: false,
};

//reducers
export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
