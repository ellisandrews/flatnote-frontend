import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import Loading from './Loading'
import { setLoggedInUser } from '../../actions/sessions'
import { getAuthToken, getAuthTokenHeader } from '../../utils'


class PrivateRoute extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: !!(!this.props.isLoggedIn && getAuthToken()) 
    }
  }

  componentDidMount() {
    // Run async logic to try to log in a user with an existing JWT only if applicable
    if (this.state.loading) {
      
      const req = {
        method: 'GET',
        headers: getAuthTokenHeader()
      }
      
      fetch('http://localhost:3000/current_user', req)
        .then(resp => resp.json())
        .then(user => {
          this.props.setLoggedInUser(user)
          this.setState({ loading: false })
        })
        .catch(err => {
          console.log(err)
          this.setState({ loading: false })
        })
    }
  }

  render() {
    // If the user is logged in, they're allowed to view the route
    if (this.props.isLoggedIn) {
      return <Route { ...this.props } />
    }

    // If they're not logged in, check if they can be authenticated with a token from localStorage. 
    // Display a loading spinner while they wait. 
    // If they can't be authenticated, redirect to the login page.
    return this.state.loading ? <Loading /> : <Redirect to="/login" /> 
  }
}


const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.loggedInUser
  }
}


export default connect(
  mapStateToProps,
  { setLoggedInUser }
)(PrivateRoute)
