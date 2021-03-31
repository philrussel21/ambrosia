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
import NonAlcoholic from './NonAlcoholic';
import Ingredients from './Ingredients';
import Ingredient from './reusables/Ingredient';
import Random from './Random';

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
            <Route exact path="/ingredients">
              <Ingredients />
            </Route>
            <Route path="/ingredients/:ingredient">
              <Ingredient />
            </Route>
            <Route exact path="/non-alcoholic">
              <NonAlcoholic />
            </Route>
            <Route exact path="/surprise-me">
              <Random />
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
