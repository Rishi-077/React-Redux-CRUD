import { ADD_ITEM, REMOVE_ITEM } from "./cartType";

const initialState = {
  numOfCakes: 0,
};

const cakeReducer = ( state = initialState, action ) =>
{
  switch ( action.type )
  {
    case ADD_ITEM:
      return {
        ...state, numOfCakes: state.numOfCakes + 1,
      };

    case REMOVE_ITEM:
      return {
        ...state, numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer; 