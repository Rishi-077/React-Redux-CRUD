import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducers from './Form-Redux/Redux/Reducers';


const initialState = {

};

const middleware = [ thunk ];

const store = createStore( rootReducers, initialState, composeWithDevTools( applyMiddleware( ...middleware ) ) );


export default store;