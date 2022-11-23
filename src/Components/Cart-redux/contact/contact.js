import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createContact, removeContact } from '../Redux/Contact/contactAction';
// import { useSelector, useDispatch } from 'react-redux';

function Contact (props)
{
  const [ reg, setReg ] = useState( { name: '' } );
  // const contact = useSelector( ( state ) => state );
  // const dispatch = useDispatch();

  function handleChange ( e )
  {
    setReg( {
      name: e.target.value,
    } );
    console.log( reg.name );

  }

  function handleSubmit ( e )
  {
    e.preventDefault();
    let contact = {
      name: reg,
    };
    setReg( {
      name: ''
    } );
    createContact( contact );
  }


  function listView ( data, index )
  {
    return (
      <div className='row'>
        <div className='col-8'>
          <li key={index} className="list-group-item clearfix">{reg.name}</li>
        </div>
        <div className='col-4'>
          <button onClick={( e ) => deleteContact( e, index )} className='btn btn-danger'></button>
        </div>
      </div>
    );
  }

  function deleteContact ( e, index )
  {
    e.preventDefault();
    deleteContact( index );
  }
  return (
    <>
      <div className='container'>
        <h1 className='h2'>Contact</h1>
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} className='form-control' value={reg.name} />
            <button className='btn btn-primary' type='submit' value="ADD">Add Contact</button>
          </form>
        </div>

        <div>
          {
            <ul>
              {contacts.map( ( contact, i ) => listView( contact, i ) )}
            </ul>
          }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ( state ) =>
{
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = ( dispatch ) =>
{
  return {
    createContact: contact => dispatch( createContact( contact ) ),
    deleteContact: index => dispatch( removeContact( index ) )
  };
};
export default connect( mapDispatchToProps, mapStateToProps )( Contact );