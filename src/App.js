import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
    <div className="App">
      {/*<Dinner></Dinner>*/}
      <Dinner dishname ="Chicken Biryani" sweetdish ="Gulab Jamun" fruit="Mango"/>
     
    </div>
  );
}

export default App;
