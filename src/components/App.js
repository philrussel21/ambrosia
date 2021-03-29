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
import Drinks from './Drinks';
import Drink from './reusables/Drink';

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
            <Route exact path="/drinks">
              <Drinks />
            </Route>
            <Route path="/drinks/:drinkId">
              <Drink />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            {/* Has to use this method cause  categories from API are 
            seperated by / which causes issues when being extracted from
            the url */}
            <Route path="/categories/:category" component={Category} />
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
