import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import NewNote from './NewNote'
import NoteShow from './NoteShow'
import NotesIndex from './NotesIndex'


const Notes = () => {
  // From the react-router docs: "The `path` lets us build <Route> paths that are relative to the parent route/."
  let { path } = useRouteMatch()

  // TODO: Clean up and standardize header rendering!
  return (
    <Container>
      <Switch>
        <Route exact path={path}>
          <h1>Notes</h1>
          <Row>
            <Col md={5}>
              <NotesIndex/>
            </Col>
          </Row>
        </Route>
        <Route path={`${path}/new`}>
          <NewNote/>
        </Route>
        <Route path={`${path}/:noteId`}>
          <h1>Notes</h1>
          <Row>
            <Col md={5}>
              <NotesIndex/>
            </Col>
            <Col>
              <NoteShow/>
            </Col>
          </Row>
        </Route>
      </Switch>
    </Container>
  )
}

export default Notes
