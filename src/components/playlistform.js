import React, { Component } from 'react'

export default class PlayListForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="userName">User Name:</label>
              <input className="form-control" type="text" name="userName" id="userName" placeholder="Name or User Name" />
            </div>
            <div className="form-group">
              <label htmlFor="songArtist">Artist/Band:</label>
              <input className="form-control" type="text" name="songArtist" id="songArtist" placeholder="Artist or Band Name" />
            </div>
            <div className="form-group">
              <label htmlFor="songTitle">Song Title:</label>
              <input className="form-control" type="text" name="songTitle" id="songTitle" placeholder="Song Title" />
            </div>
            <div className="form-group">
              <label htmlFor="songNotes">Notes About Song:</label>
              <textarea className="form-control" name="songNotes" id="songNotes" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    )
  }
}
