import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import StyleTest from './pages/StyleTest'

import Hamburger from './components/Hamburger'
import Starfield from './components/Starfield'

const App = () => {

  const options = [
    { text: 'Home', url: '/' },
    { text: 'Style', url: '/style' },
    { text: 'link 3', url: '/' },
    { text: 'link 4', url: '/' }
  ]

  return (
    <div className='App'>
    <Router>

      {/* universal elements */}
      <Starfield />
      <Hamburger options={options}/>

      {/* content window */}

      <Switch>
        <Route exact path='/' render={props => (
          <Home />
        )} />
        <Route exact path='/style' render={props => (
          <StyleTest />
        )} />
      </Switch>

    </Router>
  </div>
  )
}

export default App
