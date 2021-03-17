import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import SearchByCity from './components/pages/SearchByCity';
import SearchByCountry from './components/pages/SearchByCountry';

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/search-by-city' component={SearchByCity} />
      <Route path='/search-by-country' component={SearchByCountry} />
    </Switch>
  </BrowserRouter>,
  root
);
