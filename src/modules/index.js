import { combineReducers } from "redux";
import pageNumber from "./pageNumber";
import login from "./login";

export default combineReducers({
  pageNumber,
  login,
});
