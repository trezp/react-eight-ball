import React, { Component } from 'react';

export default class QuestionForm extends Component {
  render() {
    if(this.props.displayQuestion){
      return null;
    }
    return (
      <form id="questionForm">
        <input type="text" 
          value={this.props.question}
          onChange={this.props.handleQuestionChange} />
        <button type="button" onClick={this.props.handleQuestionSubmit}>Submit</button>
      </form>
    );
  }
}