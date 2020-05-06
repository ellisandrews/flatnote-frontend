import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Note from './Note'


const NoteShow = props => {
  // Get the note ID from the URL, and parse it as an int
  let { noteId } = useParams()
  noteId = parseInt(noteId)

  // Find the note to display
  const note = props.notes.find(note => note.id === noteId)

  // Display the note
  return <Note note={note}/>
}


const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}


export default connect(mapStateToProps)(NoteShow)
