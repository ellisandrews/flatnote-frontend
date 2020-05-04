import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = (props) => {
  return props.isLoggedIn ? <Route { ...props } /> : <Redirect to="/login" />
}


const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.loggedInUser
  }
}


export default connect(mapStateToProps)(PrivateRoute)
