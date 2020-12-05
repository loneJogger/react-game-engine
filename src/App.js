import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import GamePage from './pages/GamePage'

import Hamburger from './components/Hamburger'
import Starfield from './components/Starfield'

const App = () => {

  const options = [
    { text: 'Home', url: '/' },
    { text: 'Raster Racer', url: '/racer' },
    { text: 'link 3', url: '/' },
    { text: 'link 4', url: '/' }
  ]

  return (
    <div className='App'>
    <Router>

      <Switch>
        <Route exact path='/' render={props => (
          <div>
          <Starfield />
          <Home />
          <Hamburger options={options}/>
          </div>
        )} />
        <Route exact path='/racer' render={props => (
          <div>
          <Hamburger options={options}/>
          <GamePage />
          </div>
        )} />
      </Switch>
    </Router>
  </div>
  )
}

export default App
