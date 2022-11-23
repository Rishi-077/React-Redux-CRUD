import * as actionTypes from './contactType';

const contactReducer = ( state = [], action ) =>
{
  switch ( action.type )
  {
    case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state, Object.assign( {}, action.contact )
      ];
    case actionTypes.REMOVE_CONTACT:
      return state.filter( ( data, i ) => i !== action.id );
    default:
      return state;
  }
};

export default contactReducer;