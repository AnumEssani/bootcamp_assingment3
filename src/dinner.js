import React from 'react';
import './App.css'


function Dinner (props) {
  return (
    <div > 
      <h1> {props.dishname} is so delicious </h1>
      <hr/>
      <h1>I love {props.sweetdish} </h1>
      <hr/>
      <h1>but my all time favorite is {props.fruit} <span> &hearts; &hearts; &hearts;</span> </h1>

    </div>
  )
}

export default Dinner;