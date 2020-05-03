import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import NewNote from '../views/NewNote'
import Signout from '../views/Signout'
import Login from '../views/Login'


class Display extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>      
        <Route exact path="/signout">
          <Signout />
        </Route>
        <Route exact path="/notes/new">
          <NewNote />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    )
  }
}

export default Display
