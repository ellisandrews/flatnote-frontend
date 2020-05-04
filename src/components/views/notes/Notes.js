import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

import NewNote from './NewNote'
import Note from './Note'
import NotesIndex from './NotesIndex'


const Notes = () => {
  // From the react-router docs: "The `path` lets us build <Route> paths that are relative to the parent route/."
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <NotesIndex/>
      </Route>
      <Route path={`${path}/new`}>
        <NewNote/>
      </Route>
      <Route path={`${path}/:noteId`}>
        <NotesIndex/>
        <Note/>
      </Route>
    </Switch>
  )
}

export default Notes
