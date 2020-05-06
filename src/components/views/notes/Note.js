import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { deleteNote } from '../../../actions/notes'
import { titleCase } from '../../../utils'


class Note extends Component {
  
  renderTags = () => {
    const { tags } = this.props.note
    
    // TODO: Make tags into their own little cards or buttons instead of this string
    const tagList = (tags && tags.length > 0) ? tags.map(tag => titleCase(tag.name)).join(', ') : 'None'

    return <p>Tags: {tagList}</p>
  }

  renderNote = () => {
    const { note } = this.props
    return (
      <>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        {this.renderTags()}
        <Button variant="primary" onClick={this.handleEditClick}>Edit</Button>{' '}
        <Button variant="danger" onClick={this.handleDeleteClick}>Delete</Button>
      </>
    )
  } 

  handleEditClick = () => {
    // Redirect to the edit page
    this.props.history.push(`/notes/${this.props.note.id}/edit`)
  }

  handleDeleteClick = () => {
    // Ask the user if they really want to delete the note
    const proceed = window.confirm('Are you sure you want to permanently delete this note?')
    if (proceed) {
      const { history, note, deleteNote } = this.props
      deleteNote(
        note.id, 
        () => history.push('/notes')
      )
    }
  }

  render() {
    const { note } = this.props

    return (
      <Container>
        { note ? this.renderNote() : <p>Note does not exist.</p> }
      </Container>
    )
  }
}


export default connect(
  null,
  { deleteNote }
)(withRouter(Note))
