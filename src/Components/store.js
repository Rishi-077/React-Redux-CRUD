import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./Cart-redux/Redux/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore( cakeReducer, composeWithDevTools(
  applyMiddleware() ) );

// console.log( "initialState", store.getState() );


export default store;