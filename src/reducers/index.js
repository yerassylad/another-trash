import { combineReducers } from "redux";
import core from "./Core";
import photos from "./Photos";

export default combineReducers({
  core,
  photos
});
