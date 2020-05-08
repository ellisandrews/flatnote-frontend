import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import { setLoggedInUser } from './actions/sessions'
import BreadCrumbNav from './components/layout/BreadCrumbNav'
import Display from './components/layout/Display'
import NavBar from './components/layout/NavBar'
import { getAuthToken, getAuthTokenHeader } from './utils'
import Loading from './components/helpers/Loading'


class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      loading: !this.props.loggedInUser  // Initially set to loading if there is not a logged in user
    }
  }

  componentDidMount() {

    // Once the component mounts, we'll try to log in a user if and only if they are not logged in but there is a JWT in localStorage

    // Don't try to do any auth requests if the user is already logged in.
    if (this.props.loggedInUser) {
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

  conditionallyRender = () => {
    const { loggedInUser } = this.props

    // This is the case we're trying to handle: There is an auth token in localStorage but no logged in user in redux state.
    if (!loggedInUser && getAuthToken()) {
      return <Loading />
    }

    // Otherwise, render normally
    return (
      <>
        <NavBar />
          { loggedInUser ? <BreadCrumbNav /> : null }
        <Display />
      </>
    )
  }

  render() {
    return (
      <Router>
        {this.conditionallyRender()}
        {
          // If loggedInUser, render normally

          // If not loggedInUser and no token, render normally

          // If not loggedInUser and yes token, render loading while we try to log them in

            // If token login fails, render normally
            // If token login succeeds, render normally
        }
      </Router>
    )
  }
}


const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  }
}


export default connect(
  mapStateToProps,
  { setLoggedInUser }
)(App)
