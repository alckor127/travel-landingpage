import { combineReducers } from "redux";
import { AttractivePlaceReducer } from "./attractive-place-reducer";
import { AuthReducer } from "./auth-reducer";
import { UserReducer } from "./user-reducer";

export default combineReducers({
  AttractivePlaceReducer,
  AuthReducer,
  UserReducer,
});
