import React from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCake, removeCake } from '../Redux/cartAction';

function Cart ()
{
  const cake = useSelector( ( state ) => state );
  console.log( "store", cake );
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart mt-5">
        <h2 className='mb-3'>Number of items in Cart: {cake.numOfCakes}</h2>
        <button className="green mx-2" onClick={() => dispatch( addCake() )}>Add Item to Cart</button>
        <button className="red mx-2" onClick={() => dispatch( removeCake() )} disabled={cake.numOfCakes > 0 ? false : true}>Remove Item from Cart</button>
      </div>
    </>
  );
}

export default Cart;