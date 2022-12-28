import React, { useState } from 'react';

function Test ()
{
  const [ items, setItems ] = useState( [ 1, 2, 3, 4, 5 ] );

  const three = items.find( item => item === 7 );

  return <div>The element is: {three}</div>;
}

export default Test;  