import { combineReducers } from "redux";
import { todos } from "./reducers/todos";
import { visibilityFilter } from "./reducers/visibilityFilter";

export default combineReducers({
  add: todos,
  visibility: visibilityFilter,
});
