import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import './index.css';
import AppRoute from './route';
import Welcome from './welcome/welcome';
import Activities from './activities/activities';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {AppRoute}>
         <IndexRoute component = {Welcome} />
         <Route path = "welcome" component = {Welcome} />
         <Route path = "activities" component = {Activities} />
      </Route>
   </Router>
	
), document.getElementById('root')) 