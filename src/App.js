import logo from './logo.svg';
import './App.css';
import React from 'react'
import Raves from './Raves'
import RaveForm from './RaveForm'

function App() {
  return (
    <div className="App">
      <Raves />
      <RaveForm />
    </div>
  );
}

//see a toy. create a toy (covers both get and post)
//app component counts as a component. renders a toy component. 
//toys container component would render toy cards

//which component handles data fetch call to get data (raves)

//which components should have state?
//form component
//raves container component

//what should our 5th component be?
//NavBar or About?

export default App;
