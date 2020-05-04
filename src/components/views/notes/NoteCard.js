import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";


const NoteCard = props => {

  const history = useHistory()
  const { note } = props

  return (
    <Container onClick={() => history.push(`/notes/${note.id}`)}>
      <h6>{note.title}</h6>
      <p>{note.content}</p>
    </Container>
  )
}


export default NoteCard
