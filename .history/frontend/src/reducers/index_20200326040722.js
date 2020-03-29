import { combineReducers } from "redux";
import authReducer from "../reducers/authReducers";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});