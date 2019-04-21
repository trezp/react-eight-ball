import React, { Component } from 'react';

export default class Greeter extends Component {
  render(){
    return(
      <div>
        <h2>Greetings, {this.props.name}. Please ask a question!</h2>
      </div>
    )
  }
}