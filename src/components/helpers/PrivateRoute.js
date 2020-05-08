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
      loading: !this.props.isLoggedIn  // Set to loading if the user isn't logged in. Will try to do auth with JWT. 
    }
  }

  componentDidMount() {
    
    // Don't try to do any auth requests if the user is already logged in.
    if (this.props.isLoggedIn) {
      return
    }

    // If there's a token, try to authenticate with backend
    if ( getAuthToken() ) {
    
      // Make a fetch request to the backend with the token in the header
      const req = {
        method: 'GET',
        headers: getAuthTokenHeader()
      }
      
      fetch('http://localhost:3000/current_user', req)
        .then(resp => resp.json())
        .then(user => {
          this.props.setLoggedInUser(user)
        })
        .catch(err => {
          console.log(err)
          this.setState({ loading: false })
        })  
    } else {
      this.setState({ loading: false })
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
