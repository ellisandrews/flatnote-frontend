import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateNote } from '../../../actions/notes'
import NoteForm from './NoteForm'
import { tagStringToArray } from '../../../utils'


class EditNote extends Component {

  constructor(props) {
    super(props)
    this.state = {
      note: this.findNote()
    }
  }
  
  findNote = () => {
    // Grab the noteId from the URL and use it to find the note in the redux store state
    const { notes, match: { params: { noteId } } } = this.props
    return notes.find(note => note.id === parseInt(noteId))
  }

  handleCancel = () => {
    const abandonChanges = window.confirm('Are you sure you want to abondon changes?')
    if (abandonChanges) {
      this.props.history.push(`/notes/${this.state.note.id}`)
    }
  }

  handleSubmit = (event, formData) => {
    // Prevent default form submission, and instead call the `createNote` action creator
    event.preventDefault()
    const { history, updateNote, user_id } = this.props
    
    // Extract note data
    const { title, content, tags } = formData
    const tag_names = tagStringToArray(tags)

    // Call the updateNote action creator. Pass a callback to send the user to the newly update note
    updateNote(
      this.state.note.id,
      { title, content, tag_names, user_id },
      noteId => { history.push(`/notes/${noteId}`) }
    )
  }

  render() {
    return <NoteForm note={this.state.note} action='Edit' handleCancel={this.handleCancel} handleSubmit={this.handleSubmit} />
  }
}


const mapStateToProps = state => {
  return {
    user_id: state.loggedInUser.id,
    notes: state.notes
  }
}


export default connect(
  mapStateToProps,
  { updateNote }
)(withRouter(EditNote))
