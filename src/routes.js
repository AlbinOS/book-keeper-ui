import React from 'react';
import {IndexRoute, Route} from 'react-router';

// Layouts
import Page from './components/layout/page';

// Pages
import Home from './pages/home'

// Routes
export const routes = (
  <Route path="/" component={Page}>
    <IndexRoute components={{
      pageContent: Home
    }}/>
  </Route>
);
