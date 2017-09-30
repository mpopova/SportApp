import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class Activities extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {text: 'Click on any sport to see info about it :)'}
	    this.onClick = this.onClick.bind(this);
	}
	onClick(e) {
    	this.setState({
	      text: 'OTHER STATE',
	    });
  	}

  render() {
    return (
    <div>
      		<h1>{this.state.text}</h1>
      		<div onClick={this.onClick}>Tenis</div>
   	 </div>
    )
  }
}

export default Activities;