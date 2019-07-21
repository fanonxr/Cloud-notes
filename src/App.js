import React, { Component, Fragment } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Editor from './Editor/Editor';
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
      <Fragment>
        <div className="app-container">
          <Sidebar />
          <Editor />
        </div>
      </Fragment>
    )

  }
}

export default App;
