import React from 'react'
import { Container } from 'react-bootstrap'


const Note = props => {
  
  const { note } = props
  
  return (
    <Container>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Container>
  )
}


export default Note
