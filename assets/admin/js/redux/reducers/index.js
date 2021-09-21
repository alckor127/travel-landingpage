import { combineReducers } from "redux";
import { AttractivePlaceReducer } from "./attractive-place-reducer";
import { AuthReducer } from "./auth-reducer";

export default combineReducers({
  AttractivePlaceReducer,
  AuthReducer,
});
