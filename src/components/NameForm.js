import React, { Component } from 'react';
import Popup from 'reactjs-popup';

const modalStyles = {
  padding: "1.5em",
  fontSize: "1.5em"
}

const inputStyles = {
  width: "100%",
}
export default class NameForm extends Component {
  render() {
    return (
      <Popup open={this.props.isOpen} modal closeOnDocumentClick position="right center" contentStyle={modalStyles}>
        <form id="nameForm" onSubmit={this.props.handleSubmit}>
          <p>Hello, curious user. Please tell me your name: </p>
            <input class="name-form" type="text" 
              value={this.props.name}
              onChange={this.props.handleChange} />
        </form>
      </Popup> 
    );
  }
}