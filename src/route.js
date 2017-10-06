import React, { Component } from 'react';
import { Link } from 'react-router'


class AppRoute extends React.Component {
  render() {
    return(
      <div>
      <div id="header">
        <div className="wrapper">
          <div className="logo"><Link to="welcome"></Link></div>
            <div id="navigation">
              <ul>
                <li><Link to="welcome">Home</Link></li>
                <li><Link to="activities">Sports</Link></li>
              </ul>
            </div>
          </div>
      </div>

      {this.props.children}
      </div>
    )
  }
}

export default AppRoute;
