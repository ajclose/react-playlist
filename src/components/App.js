import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './navbar'
import PlayListForm from './playlistform'
import PlayList from './playlist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <PlayListForm />
          <PlayList />

        </div>
      </div>
    );
  }
}

export default App;
