import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


const NoteCard = props => {

  const history = useHistory()
  const { note } = props

  const textPreview = (text, charLength = 70) => text.length > charLength ? text.slice(0, charLength - 3) + '...' : text

  return (
    <Card bg="dark" text="white">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{textPreview(note.content)}</Card.Text>
        <Button variant="primary" onClick={() => history.push(`/notes/${note.id}`)}>View</Button>
      </Card.Body>
    </Card>
  )
}


export default NoteCard
