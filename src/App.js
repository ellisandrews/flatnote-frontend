import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Display from './components/layout/Display'


// Wrap App components with <Router> for frontend routing
const App = () => {
  return (
    <Router>
      <NavBar />
      <Display />
    </Router>
  )
}


export default App;
