import React from 'react';
import {IndexRoute, Route} from 'react-router';

// Layouts
import Page from './components/layout/page';

// Pages
import Home from './pages/home'
import About from './pages/about'
import NoMatch from './pages/no_match'
import FilterableTimetrackingTable from './pages/report'

// Routes
export const routes = (
    <Route path="/" component={Page}>
      <IndexRoute components={{pageContent: Home}}/>
      <Route path="/about" components={{pageContent: About}}/>
      <Route path="/report" components={{pageContent: FilterableTimetrackingTable}}/>
      <Route path="*" components={{pageContent: NoMatch}}/>
    </Route>
);
