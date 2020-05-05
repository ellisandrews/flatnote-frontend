import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

import { tagArrayToString } from '../../../utils'


class NoteForm extends Component {
  
  constructor(props) {
    super(props)

    // Currently, NoteForm must be passed a note object with valid structure
    const note = props.note

    this.state = {
      title: note.title || '',
      content: note.content || '',
      tags: tagArrayToString(note.tags)  // Note that empty array produces empty string
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {

    // action is either 'New' or 'Edit'
    // handleCancel sends user back to the note show page or the note index
    // handleSubmit either 'POST's new or 'PATCH'es existing
    const { action, handleCancel, handleSubmit } = this.props

    return (
      <>
        <Row>
          <Col sm={{ offset: 1 }}>
            <h3>{action} Note</h3>
          </Col>
        </Row>
        <Form onSubmit={ (event) => handleSubmit(event, this.state) }>
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
            <Button variant="outline-secondary" onClick={handleCancel}>Cancel</Button>{' '}
            <Button variant="primary" type="submit">Save</Button>
          </Col>
        </Form.Group>
      </Form>
     </> 
    )
  }

}

export default NoteForm
