import { Dispatch } from "redux";
import API from "../api/api";
import { showLoader, hideLoader } from "./appReducer";
import { GET_TICKETS, IAction } from "./types";

export const getTicketsByQuery = (
  codeFrom: string,
  codeTo: string,
  date: string
) => async (dispatch: Dispatch) => {
  const res = await API.getTicketsByQuery(codeFrom, codeTo, date);
  const result = res.data;

  dispatch(showLoader());

  dispatch({
    type: GET_TICKETS,
    payload: result,
  });

  dispatch(hideLoader());
};

const initialState = {
  tickets: {},
};

export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case GET_TICKETS:
      return { tickets: payload };

    default:
      return state;
  }
};
