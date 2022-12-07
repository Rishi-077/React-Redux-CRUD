import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./Cart-redux/Redux/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";


const rootReducer = combineReducers( {
  cake: cakeReducer,

} );
const store = createStore( rootReducer, composeWithDevTools(
  applyMiddleware() ) );

// console.log( "initialState", store.getState() );


export default store;