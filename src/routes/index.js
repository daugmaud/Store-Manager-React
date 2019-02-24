import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import Error from '../components/Error';
import Navigation from '../components/Navigation';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/about" exact strict component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default Routes;