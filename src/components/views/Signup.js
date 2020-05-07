import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { signup } from '../../actions/sessions'


class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    // Prevent default form submission, and instead call the `signup` action creator
    event.preventDefault()
    let { history, signup } = this.props
    
    // Call the signup action creator with a callback to send the user to the homepage after successful signup
    signup(
      this.state,
      () => history.push("/")
    )
  }

  render() {
    return (
      <Container className="h-100">
        <Container className="row h-100 justify-content-center align-items-center">
          <Container className="col-5 col-md-8 col-lg-6 text-center">
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Control type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
              </Form.Group>
              <Container className="mx-auto text-center">
                <Button variant="primary" type="submit">Submit</Button>
              </Container>
            </Form>
          </Container>
        </Container>
      </Container>

    )
  }
}


// Wrap with `withRouter` to have access to the `history` API through props
export default connect(
  null, 
  { signup }
)(withRouter(Signup))
