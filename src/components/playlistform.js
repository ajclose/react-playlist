import React, { Component } from 'react'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.addToList = this.addToList.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleSongArtistChange = this.handleSongArtistChange.bind(this)
    this.handleSongTitleChange = this.handleSongTitleChange.bind(this)
    this.handleSongNotesChange = this.handleSongNotesChange.bind(this)

    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: ""
    }
  }

  addToList(e) {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  handleUserNameChange(e) {
    this.setState({userName: e.target.value})
  }

  handleSongArtistChange(e) {
    this.setState({songArtist: e.target.value})
  }

  handleSongTitleChange(e) {
    this.setState({songTitle: e.target.value})
  }

  handleSongNotesChange(e) {
    this.setState({songNotes: e.target.value})
  }

  render() {
    return (
        <div className="col-6">
          <form onSubmit={this.addToList}>
            <div className="form-group">
              <label htmlFor="userName">User Name:</label>
              <input className="form-control" type="text" name="userName" id="userName" placeholder="Name or User Name" onChange={this.handleUserNameChange} value={this.state.userName}/>
            </div>
            <div className="form-group">
              <label htmlFor="songArtist">Artist/Band:</label>
              <input className="form-control" type="text" name="songArtist" id="songArtist" placeholder="Artist or Band Name" onChange={this.handleSongArtistChange} value={this.state.songArtist} />
            </div>
            <div className="form-group">
              <label htmlFor="songTitle">Song Title:</label>
              <input className="form-control" type="text" name="songTitle" id="songTitle" placeholder="Song Title" onChange={this.handleSongTitleChange} value={this.state.songTitle}/>
            </div>
            <div className="form-group">
              <label htmlFor="songNotes">Notes About Song:</label>
              <textarea className="form-control" name="songNotes" id="songNotes" onChange={this.handleSongNotesChange} value={this.state.songNotes}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
    )
  }
}
