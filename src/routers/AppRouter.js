import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import HomePage from './../components/HomePage';
import GalleryPage from './../components/GalleryPage';
import NotFoundPage from './../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;