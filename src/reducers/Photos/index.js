import { combineReducers } from "redux";
import page from "./pageReducer";
import photos from "./photosReducer";

const photosReducer = combineReducers({
  page,
  photos
});

export default (state, action) => {
  if (action.type === "DEFAULT_PHOTOS") {
    state = undefined;
  }
  return photosReducer(state, action);
};
