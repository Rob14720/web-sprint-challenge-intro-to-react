import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import axios from 'axios';
import Char from "./components/Character";
import { URL } from './components/Constant'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${URL}`)
      .then(res => {
        setChars(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        chars.map((character) => {
          return (
           <Char char={character}/>
          )
        })
      }
    </div>
  );
}

export default App;
