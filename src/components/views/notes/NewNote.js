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
      content: '',
      tags: ''
    }
  }

  parseTagNames = () => {
    const rawNames = this.state.tags.split(',')  // Split on comma into array of raw tag names
    const trimmedNames = rawNames.map(rawName => rawName.trim())  // Trim leading and trailing whitespace from each tag name
    return trimmedNames.map(trimmedName => trimmedName.replace(/\s\s+/g, ' '))  // Replace internal whitespace with single space
  }
  
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleCancelClick = () => {
    const abandonChanges = window.confirm('Are you sure you want to abondon changes?')
    if (abandonChanges) {
      this.props.history.push(`/notes`)
    }
  }

  handleSubmit = event => {
    // Prevent default form submission, and instead call the `createNote` action creator
    event.preventDefault()
    const { history, createNote, user_id } = this.props
    
    // Extract note data from component state
    const { title, content } = this.state
    const tag_names = this.parseTagNames()
  
    // Call the login action creator with a callback to send the user to the homepage after successful login
    createNote(
      { title, content, tag_names, user_id },
      () => { history.push("/notes") }
    )
  }

  render() {
    return (
      <>
        <Row>
          <Col sm={{ offset: 1 }}>
            <h3>New Note</h3>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="1">Title</Form.Label>
            <Col sm="3">
              <Form.Control type="text" name="title" placeholder="Enter title" value={this.state.title} onChange={this.handleInputChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="1">Content</Form.Label>
            <Col sm="9">
              <Form.Control as="textarea" rows="7" name="content" placeholder="Enter note content" value={this.state.content} onChange={this.handleInputChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="1">Tags</Form.Label>
            <Col sm="6">
              <Form.Control type="text" rows="7" name="tags" placeholder="Tag1, Tag2, ..." value={this.state.tags} onChange={this.handleInputChange}/>
              <Form.Text className="text-muted">Comma-separated list of tags</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ offset: 1 }}>
              <Button variant="outline-secondary" onClick={this.handleCancelClick}>Cancel</Button>{' '}
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
