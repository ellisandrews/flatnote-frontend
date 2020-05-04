import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from '../helpers/PrivateRoute'
import Home from '../views/Home'
import Notes from '../views/notes/Notes'
import Login from '../views/Login'


class Display extends Component {

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/notes">
            <Notes/>
          </PrivateRoute>
        </Switch>
      </Container>
    )
  }
}

export default Display
