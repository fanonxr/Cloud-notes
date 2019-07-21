import React, { Component } from 'react';
import './App.css';

const firebase = require('firebase');

class App extends Component {

  state = {
    selectedNotedIndex: null,
    selectedNote: null,
    notes: null
  }

  componentDidMount = () => {
    firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes);
      // update the state to whats currently in firestore
      this.setState({ notes: notes });
    });
  }

  render() {

    return (
      <h1>Hello world</h1>
    )
  }
}

export default App;
