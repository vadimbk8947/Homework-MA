import { combineReducers } from "redux";
import appReducers from "./appReducers";
import postReducers from "./postReducers";

export default combineReducers({
  postReducers,
  appReducers,
});
