import React, { Component } from 'react';
import QuestionForm from './QuestionForm';

export default class Greeter extends Component {
  render(){
    return(
      <div className="fortune">
        <p>Greetings, {this.props.name}. Please ask a question!</p>
      </div>
    )
  }
}