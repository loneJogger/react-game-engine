import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import GamePage from './pages/GamePage'
import Test from './pages/Test'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' render={props => (
          <Home />
        )} />
        <Route exact path='/game' render={props => (
          <GamePage />
        )} />
        <Route exact path='/test' render={props => (
          <Test />
        )} />
      </Switch>
      <Footer />
    </Router>
  </div>
  )
}

export default App
