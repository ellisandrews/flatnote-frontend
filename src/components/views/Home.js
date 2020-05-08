import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home extends Component {
  
  renderLinks = () => {
    return (
      <div>
        <Link style={{marginRight: 10}} to="/login">Log In</Link>
        |
        <Link style={{marginLeft: 10}} to="/signup">Sign Up</Link>
      </div>
    )
  }

  renderMain = () => {
    const user = this.props.loggedInUser
    return user ? <p>Welcome to FlatNote, {user.username}!</p> : this.renderLinks()
  }

  render() {
    return (
      <Container className="text-center">
        <h1>Home</h1>
        {this.renderMain()}
      </Container>
    )
  }
}


const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  }
}


export default connect(mapStateToProps)(Home)
