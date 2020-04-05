/**
 * @file combined reducer. helper of Redux implementation.
 * @author Krutin Trivedi <krutin@dal.ca>
 */

//importing Components & required Modules
import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import successReducer from "./successReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  success: successReducer
});