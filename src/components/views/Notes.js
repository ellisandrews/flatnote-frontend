import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import NewNote from './notes/NewNote'
import EditNote from './notes/EditNote'
import ShowNote from './notes/ShowNote'
import NotesIndex from './notes/NotesIndex'


const Notes = () => {
  // From the react-router docs: "The `path` lets us build <Route> paths that are relative to the parent route/."
  let { path } = useRouteMatch()

  return (
    <>
      <h1>Notes</h1>
      <Row>
        <Col md={4}>
          <NotesIndex/>
        </Col>
        <Col>
          <Switch>
            <Route exact path={`${path}/new`} component={NewNote} />
            <Route exact path={`${path}/:noteId`} component={ShowNote} />
            <Route exact path={`${path}/:noteId/edit`} component={EditNote} />  
          </Switch>
        </Col>
      </Row>
    </>
  )
}

export default Notes
