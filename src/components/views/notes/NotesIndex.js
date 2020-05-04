import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import NoteCard from './NoteCard'


class NotesIndex extends Component {
  
  renderNotes = () => {
    return this.props.notes.map(note => <li><NoteCard note={note}/></li>)
  }
  
  render() {
    return (
      <Container>
        <ul>
          {this.renderNotes()}
        </ul>
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
