import './App.css';
import React, { useState, useEffect } from 'react'
import Raves from './Raves'
import RaveForm from './RaveForm'

function App() {
  const [raves, setRaves] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/raves')
  .then(res => res.json())
  .then(data => setRaves(data))
}, [] ) //empty array of dependencies

  return (
    <div className="App">
      <Raves raves={raves} />
      <RaveForm />
    </div>
  );
}

//see a toy. create a toy (covers both get and post)
//app component counts as a component. renders a toy component. 
//toys container component would render toy cards

//which component handles data fetch call to get data (raves)
//app

//which components should have state?
//form component
//raves container component



export default App;
