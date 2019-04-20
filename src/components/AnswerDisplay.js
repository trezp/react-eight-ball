import React, { Component } from 'react';

export default class AnswerDisplay extends Component {
  render(){
    return(
      <div className="fortune">
        <p>{this.props.answer}</p>
      </div>
    )
  }
}