import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import NavBar from './components/layout/NavBar'
import Display from './components/layout/Display'
import BreadCrumbNav from './components/layout/BreadCrumbNav'


// Wrap App components with <Router> for frontend routing
const App = props => {
  return (
    <Router>
      <NavBar />
      { props.loggedInUser ? <BreadCrumbNav /> : null }
      <Display />
    </Router>
  )
}


const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  }
}


export default connect(mapStateToProps)(App);
