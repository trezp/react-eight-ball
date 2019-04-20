import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class NameForm extends Component {
  render() {
    console.log(this.props.isOpen)
    return (
      <Popup open={this.props.isOpen} modal closeOnDocumentClick position="right center">
        <form id="nameForm" onSubmit={this.props.handleSubmit}>
          Hello, curious user. Please tell me your name: 
            <input type="text" 
              value={this.props.name}
              onChange={this.props.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </Popup> 
    );
  }
}