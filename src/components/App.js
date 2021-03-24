import React from 'react';
import { Container } from 'react-bootstrap';
import AppNav from './AppNav';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Categories from './Categories';
import Category from './reusables/Category';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <AppNav />
        <Container fluid="lg" className="main-cont">
          <Disclaimer />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route path="/categories/:category" children={<Category />} />
            <Route path="/ingredients">
              Ingredients
            </Route>
            <Route path="/non-alcoholic">
              Non-Alcoholic
            </Route>
            <Route path="/surprise-me">
              Surprise Me!
            </Route>
            <Route path="*">
              Invalid Route - 404
            </Route>

          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
