import React, { Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import App from './App';

const root = document.getElementById('root');

const router = (
  <Router history = {hashHistory}>
    <Route path = '/' component = {App} >
    </Route>
  </Router>
)


render(router, root);
