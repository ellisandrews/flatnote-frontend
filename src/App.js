import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Display from './components/layout/Display'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Display />
    </Router>
  )
}


export default App;
