import React, { Component } from 'react'
import { Spinner, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { setLoggedInUser } from '../../actions/sessions'
import { getAuthToken, getAuthTokenHeader } from '../../utils'


class PrivateRoute extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
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
          console.log('HIIIII')
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
    // Display a loading spinner while they wait
    if (this.state.loading) {
      return (
        <Container style={{padding: 100}} className="h-100">
          <Container className="row h-100 justify-content-center align-items-center">
            <Container className="col-4 text-center">
              <Spinner animation="border" variant="dark" /> 
            </Container>
          </Container>
        </Container>
      )
    } else {
      return <Redirect to="/login" /> 
    }
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
