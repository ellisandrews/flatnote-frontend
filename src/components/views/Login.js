import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { login } from '../../actions/sessions'


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    // Prevent default form submission, and instead call the `login` action creator
    event.preventDefault()
    let { history } = this.props
    
    // Call the login action creator with a callback to send the user to the homepage after successful login
    this.props.login(
      this.state.username,
      () => { history.push("/") }
    )
  }

  render() {
    return (
      <Container>
        <h1>Log In</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="1">Username</Form.Label>
            <Col sm="3">
              <Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange}/>
            </Col>
            <Col>
              <Button variant="primary" type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}


// Wrap with `withRouter` to have access to the `history` API through props
export default connect(
  null, 
  { login }
)(withRouter(Login))
