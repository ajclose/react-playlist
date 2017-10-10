import React, { Component } from 'react'

import PlayListItem from './playlistitem'

export default class PlayList extends Component {
  constructor(props) {
    super(props)

    this.fetchData = this.fetchData.bind(this)

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  fetchData(e) {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log("success!");
      })
    }

  render() {
    return (
        <div className="col-6">
          <form onSubmit={this.fetchData}>
            <button type="submit" className="btn btn-success">Update List</button>
          </form>
          <PlayListItem songs={this.state.songs} />
        </div>
    )
  }
}
