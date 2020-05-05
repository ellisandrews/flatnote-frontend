import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { titleCase } from '../../../utils'


class Note extends Component {
  
  renderTags = () => {
    const { tags } = this.props.note
    
    // TODO: Make tags into their own little cards or buttons instead of this string
    const tagList = (tags && tags.length > 0) ? tags.map(tag => titleCase(tag.name)).join(', ') : 'None'

    return <p>Tags: {tagList}</p>
  }

  render() {
    const { note } = this.props

    return (
      <Container>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        {this.renderTags()}
      </Container>
    )
  }
}


export default Note
