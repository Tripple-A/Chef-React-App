import { combineReducers } from "redux";
import loggedIn from "./login";
import user from "./user";

const rootReducer = combineReducers({
  loggedIn,
  user
});

export default rootReducer;
