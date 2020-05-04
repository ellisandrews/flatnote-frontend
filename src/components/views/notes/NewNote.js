import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createNote } from '../../../actions/notes'


class NewNote extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    // Prevent default form submission, and instead call the `createNote` action creator
    event.preventDefault()
    const { history, createNote, user_id } = this.props
    
    // Call the login action creator with a callback to send the user to the homepage after successful login
    createNote(
      { ...this.state, user_id },
      () => { history.push("/notes") }
    )
  }

  render() {
    return (
      <>
        <h1>New Note</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="1">Title</Form.Label>
            <Col sm="3">
              <Form.Control type="text" name="title" placeholder="Enter title" value={this.state.title} onChange={this.handleInputChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="1">Content</Form.Label>
            <Col sm="6">
              <Form.Control as="textarea" rows="7" name="content" placeholder="Enter note content" value={this.state.content} onChange={this.handleInputChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ offset: 6 }}>
              <Button variant="primary" type="submit">Save</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    user_id: state.loggedInUser.id
  }
}


export default connect(
  mapStateToProps,
  { createNote }
)(withRouter(NewNote))
