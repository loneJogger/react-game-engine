import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import GamePage from './pages/GamePage'
import Action from './pages/Action'

import Hamburger from './components/Hamburger'
import Starfield from './components/Starfield'

const App = () => {

  const options = [
    { text: 'Home', url: '/' },
    { text: 'Racer', url: '/racer' },
    { text: 'Action', url: '/action' },
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
        <Route exact path='/action' render={props => (
          <div>
            <Starfield />
            <Action />
            <Hamburger options={options}/>
          </div>
        )} />
      </Switch>
    </Router>
  </div>
  )
}

export default App
