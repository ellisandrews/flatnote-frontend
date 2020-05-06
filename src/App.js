import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import NavBar from './components/layout/NavBar'
import Display from './components/layout/Display'
import BreadCrumbNav from './components/layout/BreadCrumbNav'


// Wrap App components with <Router> for frontend routing
const App = () => {
  return (
    <Router>
      <NavBar />
      <BreadCrumbNav />
      <Display />
    </Router>
  )
}


export default App;
