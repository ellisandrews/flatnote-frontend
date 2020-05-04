import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Note from './Note'


const Notes = () => {
  // From the react-router docs: "The `path` lets us build <Route> paths that are relative to the parent route/."
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <h3>Notes / Dashboard Page</h3>
      </Route>
      <Route path={`${path}/:noteId`}>
        <Note/>
      </Route>
    </Switch>
  )
}

export default Notes
