import { combineReducers } from "redux";
import screenSizes from "./screenSizesReducer";
import deviceType from "./deviceTypeReducer";

export default combineReducers({
  screenSizes,
  deviceType
});
