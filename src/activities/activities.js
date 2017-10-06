import React, { Component } from 'react';

class Activities extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {text: 'Click on any sport to see info about it :)'}
	    this.onClick = this.onClick.bind(this);
	}
	onClick(sport) {
      var textState = '';
      if(sport==='tenis'){
        textState = 'Tennis is a very popular sport in Australia. Is played by people of all ages. Tennis can be played by two people (called ‘playing singles’) or four people (‘doubles’). Players use racquets to hit a ball over a net into the other side of the court. Tennis is a good sport for maintaining health, fitness, strength and agility. It also has social and psychological benefits.'
      }
      else if(sport==='football'){
        textState = 'Football is team sport that involve, to varying degrees, kicking a ball with the foot to score a goal. Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional context in which the word appears.'
      }
      else if(sport==='volleyball'){
        textState = 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other teams court under organized rules.'
      }
      this.setState({
	      text: textState,
	    });
  	}

  render() {
    return (
    <div>
        <div className="content">
          <div className="wrapper">
          		<div className="btn" onClick={() => this.onClick('tenis')}><span>Tenis</span></div>
              <div className="btn" onClick={() => this.onClick('football')}><span>Football</span></div>
              <div className="btn" onClick={() => this.onClick('volleyball')}><span>Volleyball</span></div>
              <div id="changable-area">{this.state.text}</div>
          </div>
        </div>
   	 </div>
    )
  }
}

export default Activities;