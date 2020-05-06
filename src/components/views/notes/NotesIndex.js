import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import NoteCard from './NoteCard'


class NotesIndex extends Component {
  
  renderNoteCards = () => {
    return this.props.notes.map(note => <NoteCard key={note.id} note={note}/>)
  }
  
  render() {
    return (
      <Container id="notes-index" className="overflow-auto">
        {this.renderNoteCards()}
      </Container>
    )
  }
}


const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}


export default connect(mapStateToProps)(NotesIndex)
