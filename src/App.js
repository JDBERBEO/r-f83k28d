import React, { Component, useState } from 'react';
import './App.css';

function App() {

    let [count, setCount] = useState(0)
    

    
    const handleOnClic = (e) => {
      //e.preventDefault()
      // console.log('hola')
      count++
      setCount(count)
      console.log(count)
    }

    return (
      
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick={handleOnClic}>Incrementa</button>
      </div>
    );
}

export default App;
