import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import { setLoggedInUser } from './actions/sessions'
import BreadCrumbNav from './components/layout/BreadCrumbNav'
import Display from './components/layout/Display'
import NavBar from './components/layout/NavBar'
import { getAuthToken, getAuthTokenHeader } from './utils'


// Wrap App components with <Router> for frontend routing
class App extends Component {
  
  constructor(props) {
    super(props)
    // Login via token if applicable (for page refreshes, etc.)
    if ( getAuthToken() ) {
      this.tokenLogin()
    }
  }

  tokenLogin = () => {
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
      .catch(err => console.log(err))  
  }

  render() {
    return (
      <Router>
        <NavBar />
        { this.props.loggedInUser ? <BreadCrumbNav /> : null }
        <Display />
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
