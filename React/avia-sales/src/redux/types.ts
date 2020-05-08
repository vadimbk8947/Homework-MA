export const CODE_FROM = "SEARCH/CODE_FROM";
export const CODE_TO = "SEARCH/CODE_TO";
export const DEPART_DATE = "SEARCH/DEPART_DATE";

export const GET_TICKETS = "TICKETS/GET_TICKETS";

export const HIDE_LOADER = "APP/HIDE_LOADER";
export const SHOW_LOADER = "APP/SHOW_LOADER";

export interface IAction {
  type: string;
  payload?: any;
}
