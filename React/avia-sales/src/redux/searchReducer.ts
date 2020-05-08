import { IAction, CODE_FROM, CODE_TO, DEPART_DATE } from "./types";

export const getCodeAirportFrom = (id: string | null) => ({
  type: CODE_FROM,
  payload: id,
});

export const getCodeAirportTo = (id: string | null) => ({
  type: CODE_TO,
  payload: id,
});

export const getDepartDate = (date: string) => ({
  type: DEPART_DATE,
  payload: date,
});

const initialState = {
  codeFrom: "",
  codeTo: "",
  date: "",
};

export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case CODE_FROM:
      return { ...state, codeFrom: payload };

    case CODE_TO:
      return { ...state, codeTo: payload };

    case DEPART_DATE:
      return { ...state, date: payload };

    default:
      return state;
  }
};
