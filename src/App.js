import React, { Component } from 'react';
import './App.css';
import AnswerDisplay from './components/AnswerDisplay';
import Greeter from './components/Greeter';
import NameForm from './components/NameForm';
import QuestionForm from "./components/QuestionForm"
import FortuneDisplay from './components/FortuneDisplay';


//TO DO
// Conditional show forms
// Style forms... style everything really
// Animate Eight Ball 
// Style name modal

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
    this.setState({question: event.target.value})
    this.handleClick();
  }
  
  render() {
    return (
      <div className="container">
        <h1>Magic Eight Ball</h1>
        <div onClick={this.handleClick} className="eight-ball">
          <AnswerDisplay answer={this.state.answer}/>
        </div>
        <FortuneDisplay 
          question={this.state.question}
          answer={this.state.answer}
        />
        <Greeter name={this.state.displayName} />
        <QuestionForm 
          handleQuestionChange={this.handleQuestionChange}
          handleQuestionSubmit={this.handleQuestionSubmit}
        />
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
