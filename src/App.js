import './App.css';
import React, { useState, useEffect } from 'react'
import {Route, Switch} from 'react-router-dom'
import Raves from './Raves'
import RaveForm from './RaveForm'
import NavBar from './NavBar'

import Home from './Home'
import About from './About'

function App() {
  const [raves, setRaves] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/raves')
  .then(res => res.json())
  .then(setRaves)
}, [] ) 

function newRave(newRave){
  setRaves([...raves, newRave])
}

function deleteRave(id){
  const updatedRave = raves.filter(rave => rave.id !== id )
  setRaves(updatedRave)
} 

function updateRave(updatedRave){
  const revisedRave = raves.map((rave) => {
    if (rave.id !== updatedRave.id)
      return rave
        else 
      return setRaves(revisedRave)
  })
}

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path ="/">
            <Home raves={raves} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/raves">
            <RaveForm newRave={newRave} />
            <Raves raves={raves} deleteRave={deleteRave} updateRave={updateRave}/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path ="/about">
            <About />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
