import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class AppRoute extends React.Component {
  render() {
    return(
      <div>
      <ul>
      <li><Link to="welcome">Welcome</Link></li>
      <li><Link to="activities">Activities</Link></li>
      </ul>

      {this.props.children}
      </div>
    )
  }
}

export default AppRoute;
