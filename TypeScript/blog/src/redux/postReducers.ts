import {
  IAction,
  GET_ALL_POSTS,
  GET_SELECTED_POST,
  CREATE_POST,
  CREATE_COMMENT,
} from "./types";
import { Dispatch } from "redux";
import API, { ICreatePost, ICreateComment } from "../api";
import { showLoader, hideLoader } from "./appReducers";

//post actions
export const getAllPosts = () => async (dispatch: Dispatch) => {
  dispatch(showLoader());
  const res = await API.getAllPosts();
  const data = res.data;

  dispatch({
    type: GET_ALL_POSTS,
    payload: data,
  });
  dispatch(hideLoader());
};

export const getSelectedPost = (postId: string) => async (
  dispatch: Dispatch
) => {
  const res = await API.getSelectedPost(postId);
  const data = res.data;

  return dispatch({
    type: GET_SELECTED_POST,
    payload: data,
  });
};

export const createPost = (data: ICreatePost) => async (dispatch: Dispatch) => {
  const res = await API.createPost(data);
  const newPost = res.data;

  return dispatch({
    type: CREATE_POST,
    payload: newPost,
  });
};

//comment action
export const createComment = (data: ICreateComment) => async (
  dispatch: Dispatch
) => {
  const res = await API.createComment(data);
  const newComment = res.data;

  return dispatch({
    type: CREATE_COMMENT,
    payload: newComment,
  });
};

const initialState = {
  posts: [],
  selected: {},
  created: {},
  comment: {},
};

//reducers
export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case GET_ALL_POSTS:
      return { ...state, posts: payload };

    case GET_SELECTED_POST:
      return { ...state, selected: payload };

    case CREATE_POST:
      return { ...state, created: payload };

    case CREATE_COMMENT:
      return { ...state, comment: payload };

    default:
      return state;
  }
};
