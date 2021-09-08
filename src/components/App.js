import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import Messages from './Messages'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/messages'>
          <Messages />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>    
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/*'>
          <h1>404 Not Found!</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App