import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'


class NavBar extends Component {
    
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">FlatNote</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">{/* Links added here will be left aligned on the NavBar*/}</Nav>
          <Nav>
            <Nav.Link href="#">New Note</Nav.Link>
            <Nav.Link href="#">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}


export default NavBar
