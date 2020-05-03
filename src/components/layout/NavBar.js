import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'


class NavBar extends Component {

  renderSessionComponents = () => {
    if (this.props.loggedInUser) {
      return (
        <>
          <LinkContainer to="/notes/new">
            <Nav.Link>New Note</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signout">
            <Nav.Link>Sign Out</Nav.Link>
          </LinkContainer>
        </>
      )
    } else {
      return (
        <LinkContainer to="/login">
          <Nav.Link>Log In</Nav.Link>
        </LinkContainer>
      )
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>FlatNote</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {this.renderSessionComponents()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}


const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  }
}


export default connect(mapStateToProps)(NavBar)
