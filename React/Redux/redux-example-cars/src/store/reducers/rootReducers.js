import { combineReducers } from "redux";
import mockedData from "../../mockedData";
import reducers from "./reducers";

export default combineReducers({
  cars: mockedData,
  active: reducers,
});
