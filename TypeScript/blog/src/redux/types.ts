export const GET_ALL_POSTS = "POST/GET_ALL_POSTS";
export const GET_SELECTED_POST = "POST/GET_SELECTED_POST";
export const CREATE_POST = "POST/CREATE_POST";
export const CREATE_COMMENT = "POST/CREATE_COMMENT";

export const SHOW_LOADER = "APP/SHOW_LOADER";
export const HIDE_LOADER = "APP/HIDE_LOADER";

export interface IAction {
  type: string;
  payload?: any;
}
