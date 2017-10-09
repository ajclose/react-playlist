import React, { Component } from 'react'
import logo from '../logo.svg';

export default class NavBar extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Play What?!</h1>
      </div>
    )
  }
}