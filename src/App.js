import React, { Component } from 'react';
import './App.css';
import AnswerDisplay from './components/AnswerDisplay';
import Greeter from './components/Greeter';
import NameForm from './components/NameForm';
import QuestionForm from "./components/QuestionForm"
import FortuneDisplay from './components/FortuneDisplay';


//TO DO
// Bug : modal pops up if "enter" is hit inside any form input
// Style forms... style everything really
// Animate Eight Ball 
// Style name modal
// Add button to ask another question

const fortunes = [
  "It is decidely so",
  "I think not",
  "Yes",
  "Ask again later",
  "No",
  "Absolutely yes",
  "Maybe, maybe not", 
  "Highly unlikely",
  "Outlook is good"
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      question: "",
      displayQuestion: "",
      name: "",
      displayName: "",
      fortunes: fortunes,
      modalOpen: true
    };
  }
  
  handleClick = ()=>{
    const randNum = Math.floor(Math.random() * this.state.fortunes.length);
    const answer = this.state.fortunes[randNum];
    this.setState({answer: answer});
  }
  
  handleChange = (event) => {
    this.setState({name: event.target.value});
  }
  
  handleSubmit = (event)=> {
    event.preventDefault();
    this.setState({displayName: this.state.name});
    document.getElementById("nameForm").reset();
    this.setState({modalOpen: false});
  }

  handleQuestionChange = (event) => {
    this.setState({question: event.target.value});
  }

  handleQuestionSubmit = (event) => {
    event.preventDefault(); 
    this.setState({ displayQuestion: this.state.question});
    document.getElementById("questionForm").reset();
    this.handleClick();
  }
  
  render() {
    return (
      <div className="container">
        <h1>Magic Eight Ball</h1>
        <div onClick={this.handleClick} className="eight-ball">
          {this.state.answer? <AnswerDisplay answer={this.state.answer}/> : " "}
        </div>

        {this.state.displayQuestion ?
          <FortuneDisplay name={this.state.name} question={this.state.displayQuestion} answer={this.state.answer}/> : " "
        }
        
        {this.state.displayName && !this.state.answer ? 
           <Greeter name={this.state.displayName} /> : " "
        }
       
       {!this.state.displayQuestion ? 
          <QuestionForm
          handleQuestionChange={this.handleQuestionChange}
          handleQuestionSubmit={this.handleQuestionSubmit}
        /> : null 
       }

        <NameForm
          isOpen={this.state.modalOpen}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default App;
