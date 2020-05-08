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
    
    // Set loading to true if there is *NOT* a logged in user in redux store state but there *IS* a JWT in localStorage.
    // In this (and only this) case we will attempt to authenticate the user behind the scenes with the JWT to persist their session.
    this.state = {
      loading: !!(!this.props.loggedInUser && getAuthToken())
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

  conditionallyRender = () => {
    // Rending a simple Loading component if we're communicating with the backend, otherwise normal app components
    return this.state.loading ?
      <Loading />
        :
      <>
        <NavBar />
        { this.props.loggedInUser ? <BreadCrumbNav /> : null }
        <Display />
      </>
  }

  render() {
    return (
      <Router>
        {this.conditionallyRender()}
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
