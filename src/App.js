import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import GamePage from './pages/GamePage'
import Test from './pages/Test'
import StyleTest from './pages/StyleTest'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className='App'>
    <Router>

      <Switch>
        <Route exact path='/' render={props => (
          <>
          <Header />
          <Home />
          <Footer />
          </>
        )} />
        <Route exact path='/game' render={props => (
          <>
          <Header />
          <GamePage />
          <Footer />
          </>
        )} />
        <Route exact path='/test' render={props => (
          <>
          <Header />
          <Test />
          <Footer />
          </>
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
