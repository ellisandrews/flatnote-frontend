import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import { fetchUserNotes } from '../../../actions/notes'
import NoteCard from './NoteCard'


class NotesIndex extends Component {
  
  componentDidMount() {
    // Fetch the user's notes from the backend
    const { user_id, fetchUserNotes } = this.props
    fetchUserNotes(user_id)
  }
  
  renderNotes = () => {
    return this.props.notes.map(note => <li key={note.id}><NoteCard note={note}/></li>)
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
    user_id: state.loggedInUser.id,
    notes: state.notes
  }
}


export default connect(
  mapStateToProps,
  { fetchUserNotes }
)(NotesIndex)
