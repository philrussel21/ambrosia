import React from 'react'
import { Container } from 'react-bootstrap'
import AppNav from './AppNav'
import Disclaimer from './Disclaimer'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div >
      <Router>
        <AppNav />
        <Container fluid="lg" className="main-cont">
          <Disclaimer />

          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/categories">
              Categories
            </Route>
            <Route path="/ingredients">
              Ingredients
            </Route>
            <Route path="/non-alcoholic">
              Non-Alcoholic
            </Route>
            <Route path="/surprise-me">
              Surprise Me!
            </Route>

          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
