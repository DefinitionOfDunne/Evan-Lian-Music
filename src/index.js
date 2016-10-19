import React from 'react';
import ReactDOM from 'react-dom';
const Landing = require('./components/Landing');
const Contact = require('./components/Contact');
const Covers = require('./components/Covers');
const Gallery = require ('./components/Gallery');
const Bio = require('./components/Bio');
const Layout = require('./components/Layout');
import './component-stylesheets/index.css';
const ReactRouter = require('react-router');
const { Router, Route, hashHistory, IndexRoute } = ReactRouter;

const Main = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/bio' component={Bio} />
      <Route path='/covers' component={Covers} />
      <Route path='/contact' component={Contact} />
      <Route path='/gallery' component={Gallery} />
    </Route>
  </Router>
 );


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
