import React, { Component } from 'react';

export default class FortuneDisplay extends Component {
  render(){
    return(
      <div className="fortune">
        <p>The answer to your question {this.props.question} is: {this.props.answer}</p>
      </div>
    )
  }
}