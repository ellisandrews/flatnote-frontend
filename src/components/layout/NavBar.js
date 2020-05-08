import React, { Component } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import { logout } from '../../actions/sessions'


class NavBar extends Component {

  handleSignOutClick = () => {
    this.props.logout()
  }

  renderRightLinks = () => {
    if (this.props.loggedInUser) {
      return (
        <>
          <LinkContainer to="/notes/new">
            <Nav.Item as={Button}>+ New</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/" onClick={this.handleSignOutClick}>
            <Nav.Link>Sign Out</Nav.Link>
          </LinkContainer>
        </>
      )
    }
  }

  renderLeftLinks = () => {
    if (this.props.loggedInUser) {
      return (
        <>
          <LinkContainer to="/notes">
            <Nav.Link>Notes</Nav.Link>
          </LinkContainer>
        </>
      )
    }
  }

  renderLinks = () => {
    return (
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {this.renderLeftLinks()}
        </Nav>
        <Nav>
          {this.renderRightLinks()}
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
