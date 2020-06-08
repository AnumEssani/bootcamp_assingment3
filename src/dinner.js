import React from 'react';


function Dinner (props) {
  return (
    <div > 
      <h1> {props.dishname} is so delicious </h1>
      <h1>I love {props.sweetdish} </h1>

    </div>
  )
}

export default Dinner;