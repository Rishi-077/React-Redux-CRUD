import { combineReducers } from "redux";
import cakeReducer from "../../../Cart-redux/Redux/cartReducer";
import formReducer from "./FormReducer";

export default combineReducers( {
  users: formReducer,
  cake: cakeReducer
} );