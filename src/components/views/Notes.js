import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import NewNote from './notes/NewNote'
import EditNote from './notes/EditNote'
import NoteShow from './notes/NoteShow'
import NotesIndex from './notes/NotesIndex'


const Notes = () => {
  // From the react-router docs: "The `path` lets us build <Route> paths that are relative to the parent route/."
  let { path } = useRouteMatch()

  // TODO: DRY up code a bit, specifically <NotesIndex> repeated
  return (
    <>
      <h1>Notes</h1>
      <Switch>
        <Route exact path={path}>
          <Row>
            <Col md={5}>
              <NotesIndex/>
            </Col>
          </Row>
        </Route>
        <Route exact path={`${path}/new`}>
          <NewNote/>
        </Route>
        <Route exact path={`${path}/:noteId`}>
          <Row>
            <Col md={5}>
              <NotesIndex/>
            </Col>
            <Col>
              <NoteShow/>
            </Col>
          </Row>
        </Route>
        <Route exact path={`${path}/:noteId/edit`}>
          <Row>
            <Col md={5}>
              <NotesIndex/>
            </Col>
            <Col>
              <EditNote/>
            </Col>
          </Row>
        </Route>
      </Switch>
    </>
  )
}

export default Notes
