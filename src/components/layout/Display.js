import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from '../helpers/PrivateRoute'
import Home from '../views/Home'
import Login from '../views/Login'
import Notes from '../views/Notes'
import Signup from '../views/Signup'


class Display extends Component {

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/notes" component={Notes} />
        </Switch>
      </Container>
    )
  }
}


export default Display
