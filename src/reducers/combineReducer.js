import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import myFirstReducer from "./myFirstReducer"

export default combineReducers({
  rootReducer,
  myFirstReducer
})