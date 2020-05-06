import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createNote } from '../../../actions/notes'
import NoteForm from './NoteForm'
import { tagStringToArray } from '../../../utils'


class NewNote extends Component {

  handleCancel = () => {
    const abandonChanges = window.confirm('Are you sure you want to abondon changes?')
    if (abandonChanges) {
      this.props.history.push(`/notes`)
    }
  }

  handleSubmit = (event, formData) => {
    // Prevent default form submission, and instead call the `createNote` action creator
    event.preventDefault()
    const { history, createNote, user_id } = this.props
    
    // Extract note data
    const { title, content, tags } = formData
    const tag_names = tagStringToArray(tags)

    // Call the createNote action creator. Pass a callback to send the user to the newly created note
    createNote(
      { title, content, tag_names, user_id },
      noteId => { history.push(`/notes/${noteId}`) }
    )
  }

  render() {
    // Create an empty new note for the form to render
    const newNote = {
      title: '',
      content: '',
      tags: []
    }
    
    return <NoteForm note={newNote} action='New' handleCancel={this.handleCancel} handleSubmit={this.handleSubmit} />
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
