import React, {Component} from 'react'

export default class PlayListItem extends Component {
  render() {
    return (
      <div>
        {this.props.songs.map((song) => <div className="card song" key={song._id}>
          <div className="card-body">
            <p>
              <span className="label">User:
              </span>
              {song.userName}</p>
            <p>
              <span className="label">Artist/Band:
              </span>
              {song.songArtist}</p>
            <p>
              <span className="label">Song Title:
              </span>
              {song.songTitle}</p>
            <p>
              <span className="label">Song Notes:
              </span>
              {song.songNotes}</p>
          </div>
        </div>)}
      </div>
    )
  }
}
