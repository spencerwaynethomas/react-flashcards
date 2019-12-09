import React, { Component } from 'react';
import './App.css';
import { Container, Header } from "semantic-ui-react"
import Flashcards from "./Flashcards"


class App extends Component {

  state = {
    flashcards: [
      {id: 1, subject: "Math", question: "1 + 1", answer: "2"},
      {id: 2, subject: "Math", question: "2 + 2", answer: "4"},
      {id: 3, subject: "Math", question: "3 + 3", answer: "6"},
    ]
  }

  render() {
    return (
      <>
      <Container>
        <Header as="h1">React Flashcards</Header>
        <Flashcards flashcards={this.state.flashcards} />
      </Container>
      </>
    );
  }
}

export default App;
