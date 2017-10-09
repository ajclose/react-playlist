import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './navbar'
import PlayListForm from './playlistform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
