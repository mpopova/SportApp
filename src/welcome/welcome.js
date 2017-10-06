import React, { Component } from 'react';
import { Link } from 'react-router'


class Welcome extends React.Component {
  render() {
    return (
    	<div className="content">
	    	<div className="wrapper">
	      		<h1>Welcome to SportApp!</h1>
	      		<h2>Click on the button bellow to see all sports!</h2>
	        	<div id="activity-btn"><Link to="activities"><span>Sports</span></Link></div>
	        </div>
        </div>
    )
  }
}

export default Welcome;