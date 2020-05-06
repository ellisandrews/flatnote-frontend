import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import { titleCase } from '../../../utils'


class Note extends Component {
  
  renderTags = () => {
    const { tags } = this.props.note
    
    // TODO: Make tags into their own little cards or buttons instead of this string
    const tagList = (tags && tags.length > 0) ? tags.map(tag => titleCase(tag.name)).join(', ') : 'None'

    return <p>Tags: {tagList}</p>
  }

  handleEditClick = () => {
    // Redirect to the edit page
    this.props.history.push(`/notes/${this.props.note.id}/edit`)
  }

  handleDeleteClick = () => {
    console.log('DELETE CLICK')
   // Ask the user if they really want to delete the note

   // Delete the note

   // Redirect to /notes index
  }

  render() {
    const { note } = this.props

    return (
      <Container>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        {this.renderTags()}
        <Button variant="primary" onClick={this.handleEditClick}>Edit</Button>{' '}
        <Button variant="danger" onClick={this.handleDeleteClick}>Delete</Button>
      </Container>
    )
  }
}


export default withRouter(Note)
