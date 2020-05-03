import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


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
    event.preventDefault()
    console.log('FORM SUBMITTED:', this.state)
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


export default Login
