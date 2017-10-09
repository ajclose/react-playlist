import React, { Component } from 'react'
import logo from '../logo.svg';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="nav-items">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Play What?!</h1>
          </div>
      </nav>
    )
  }
}
