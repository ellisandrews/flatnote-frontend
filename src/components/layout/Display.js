import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from '../helpers/PrivateRoute'
import Home from '../views/Home'
import Notes from '../views/Notes'
import Login from '../views/Login'


class Display extends Component {

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/notes" component={Notes} />
        </Switch>
      </Container>
    )
  }
}

export default Display
