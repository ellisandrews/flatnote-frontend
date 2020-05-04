import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import { logout } from '../../actions/sessions'


class NavBar extends Component {

  handleSignOutClick = () => {
    this.props.logout()
  }

  renderSessionLink = () => {
    if (this.props.loggedInUser) {
      return (
        <LinkContainer to="/" onClick={this.handleSignOutClick}>
          <Nav.Link>Sign Out</Nav.Link>
        </LinkContainer>
      )
    } else {
      return (
        <LinkContainer to="/login">
          <Nav.Link>Log In</Nav.Link>
        </LinkContainer>
      )
    }
  }

  renderNavLinks = () => {
    if (this.props.loggedInUser) {
      return (
        <>
          <LinkContainer to="/notes">
            <Nav.Link>Notes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/notes/new">
            <Nav.Link>New Note</Nav.Link>
          </LinkContainer>
        </>
      )
    }
  }

  renderLinks = () => {
    return (
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {this.renderNavLinks()}
        </Nav>
        <Nav>
          {this.renderSessionLink()}
        </Nav>
      </Navbar.Collapse>
    )
  }

  render() {
    return (
      <Navbar expand="md" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>FlatNote</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {this.renderLinks()}
      </Navbar>
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
  { logout }
)(NavBar)
