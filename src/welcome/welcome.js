import React, { Component } from 'react';
import { Link } from 'react-router'


class Welcome extends React.Component {
  render() {
    return (
    	<div>
      		<h1>Welcome to SportApp!</h1>
      		<h2>Click on the button bellow to see all sports!</h2>
        	<div id="activity-btn"><Link to="activities">Sports</Link></div>
        </div>
    )
  }
}

export default Welcome;