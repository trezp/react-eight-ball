import React, { Component } from 'react';

export default class QuestionForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleQuestionSubmit}>
          <input type="text" 
            value={this.props.name}
            onChange={this.props.handleQuestionChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}