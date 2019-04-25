import { combineReducers } from "redux";
import page from "./pageReducer";
import photos from "./photosReducer";

export default combineReducers({
  page,
  photos
});
