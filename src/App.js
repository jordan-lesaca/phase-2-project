import './App.css';
import React, { useState, useEffect } from 'react'
import Raves from './Raves'
import RaveForm from './RaveForm'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'

function App() {
  const [raves, setRaves] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/raves')
  .then(res => res.json())
  .then(data => setRaves(data))
}, [] ) 

function newRave(newRave){
  setRaves([...raves, newRave])
}

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/raves">
            <RaveForm newRave={newRave} />
            <Raves raves={raves} />
          </Route>
        </Switch>
      
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

//NavBar = rave, about, ???

export default App;
