import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class Activities extends React.Component {
  render() {
    return (
    <div>
    	<div><Link to="activities">Football</Link></div>
      		<h1>Click on any sport to see info about it :) </h1>
      	<div><Link to="activities">Tenis</Link></div>
   	 </div>
    )
  }
}

export default Activities;