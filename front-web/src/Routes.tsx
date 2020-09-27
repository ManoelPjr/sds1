import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Charts from './pages/charts';
import Home from './pages/home/index';
import Records from './pages/records';

const Routes = () => (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/records">
          <Records />
        </Route> 
        <Route path="/charts">
          <Charts />
        </Route>               
    </Switch>
    </BrowserRouter>
);

export default Routes;