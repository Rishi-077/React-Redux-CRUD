import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from '../FormType';


const InitialState = {
  data: [],
  loading: true,
};

// export const getFormData = ( state ) => state.users.data;

export default function formReducer ( state = InitialState, action )
{
  const { type, payload } = action;

  switch ( type )
  {
    case GET_USERS:
      return {
        ...state,
        data: payload,
        loading: false
      };

    case ADD_USER:
      return {
        data: [ ...state.data, ...payload ],
        loading: false
      };

    case DELETE_USER:
      return {
        ...state,
        ...payload.id,
        loading: false
      };

    case EDIT_USER:
      console.log( payload );
      return {
        ...state,
        ...payload,
        loading: false
      };

    default: return state;
  }
}