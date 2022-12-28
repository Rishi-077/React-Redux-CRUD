import axios from 'axios';
import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from '../Redux/FormType';


export const getUser = () => async ( dispatch ) =>
{
  try
  {
    const res = await axios.get( `http://localhost:3004/user` );

    dispatch( {
      type: GET_USERS,
      payload: res.data
    } );

    console.log( res.data );
  }
  catch ( e )
  {
    dispatch( {
      payload: console.log( e )
    } );
  }
};


export const addUser = ( data ) => async ( dispatch ) =>
{
  try
  {
    const res = await axios.post( `http://localhost:3004/user`, data );

    dispatch( {
      type: ADD_USER,
      payload: [ res.data ],
      loading: false
    } );

    return Promise.resolve( res );
  }
  catch ( e )
  {

    console.log( e );
    return Promise.reject( e );
  }
};


export const deleteUser = ( id ) => async ( dispatch ) =>
{
  try
  {
    const res = axios.delete( `http://localhost:3004/user/${ id }` );

    console.log( id );
    dispatch( {
      type: DELETE_USER,
      payload: { id },
    } );
    return Promise.resolve( res );
  } catch ( e )
  {
    console.log( e );
  }
};



export const editUser = ( id, data ) => ( dispatch ) =>
{
  console.warn( id );

  try
  {
    const res = axios.put( `http://localhost:3004/user/${ id.id }`, data );
    // const merged = {
    //   ...id,
    //   ...data
    // };
    // console.error( merged );

    dispatch( {
      type: EDIT_USER,
      payload: data,
    } );

    return Promise.resolve( res.data );
  } catch ( e )
  {
    console.log( e );
  }
};