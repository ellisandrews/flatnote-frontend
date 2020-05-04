import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from '../helpers/PrivateRoute'
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
        <PrivateRoute exact path="/signout">
          <Signout />
        </PrivateRoute>
        <PrivateRoute exact path="/notes/new">
          <NewNote />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    )
  }
}

export default Display
