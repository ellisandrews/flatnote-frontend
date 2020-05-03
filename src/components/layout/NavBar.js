import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'


class NavBar extends Component {

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
            <LinkContainer to="/notes/new">
              <Nav.Link>New Note</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signout">
              <Nav.Link>Sign Out</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}


export default NavBar
