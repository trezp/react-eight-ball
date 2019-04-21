import React, { Component } from 'react';

export default class FortuneDisplay extends Component {
  render(){
    return(
      <div>
        <h2>The answer to your question "{this.props.question}", {this.props.name}, is:</h2>
        <p class="prediction">{this.props.answer}.</p>
      </div>
    )
  }
}