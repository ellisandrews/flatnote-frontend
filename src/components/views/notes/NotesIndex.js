import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


import NoteCard from './NoteCard'


class NotesIndex extends Component {
  
  renderNoNotes = () => {
    const showingNew = this.props.location.pathname === "/notes/new"
    return (
      <>
        <p>Created notes will show up here.</p>
        { showingNew ? null : <p><Link to="/notes/new">New Note</Link></p> }
      </>
    )
  }

  renderNoteCards = () => {
    const cards = this.props.notes.map(note => <NoteCard key={note.id} note={note}/>)
    return cards.length > 0 ? cards : this.renderNoNotes()
  }
  
  render() {
    return (
      <div>
        <h3>Notes</h3>
        <div style={{"maxHeight": "70vh"}} className="overflow-auto">
          {this.renderNoteCards()}
        </div>
      </div>
      
    )
  }
}


const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}


export default connect(mapStateToProps)(withRouter(NotesIndex))
