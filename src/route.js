import React, { Component } from 'react';
import { Link } from 'react-router'


class AppRoute extends React.Component {
  render() {
    return(
      <div>
      <ul className="navigation">
      <li><Link to="welcome">Welcome</Link></li>
      <li><Link to="activities">Sports</Link></li>
      </ul>

      {this.props.children}
      </div>
    )
  }
}

export default AppRoute;
