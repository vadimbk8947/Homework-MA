import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import ticketsReducer from "./ticketsReducer";
import appReducer from "./appReducer";

export default combineReducers({
  searchReducer,
  ticketsReducer,
  appReducer,
});
