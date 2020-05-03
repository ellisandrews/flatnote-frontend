import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'


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
          <Form.Group>          
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}


export default Login
