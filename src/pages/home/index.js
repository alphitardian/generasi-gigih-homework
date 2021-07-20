import React from "react";
import { CardContainer } from "../../components/";
import axios from 'axios'
import './style.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      artistList: [],
      trackList: [],
      albumList: []
    }
  }

  getHashParam = () => {
    let hashUrl = document.location.hash.substr(1).split('&')
    let hashComponent = hashUrl.reduce((init, item) => {
      if (item) {
        var parts = item.split('=')
        init[parts[0]] = decodeURIComponent(parts[1])
      }
      return init
    }, {})
    return hashComponent
  }

  getApiCall = async (query, token, tokenType) => {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        'Authorization': `${tokenType} ${token}`,
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      params: {
        q: query,
        type: "album,track,artist",
        limit: 5
      }
    })
    this.setState({
      artistList: response.data.artists.items,
      trackList: response.data.tracks.items,
      albumList: response.data.albums.items
    });
    console.log(response.data);
    return response.data;
  }

  getArtistList = (list) => {
    return list.map((item) => {
      return (
        <CardContainer 
          imgUrl={item.images[0].url}
          altImg="An Artist Image"
          artistName={item.type}
          trackTitle={item.name}
          btnName="Follow"
          key={item.id}
        />
      );
    })
  }

  getAlbumList = (list) => {
    return list.map((item) => {
      return (
        <CardContainer 
          imgUrl={item.images[0].url}
          altImg="An Album Image"
          artistName={item.artists[0].name}
          trackTitle={item.name}
          btnName="Select"
          key={item.id}
        />
      );
    })
  }

  getTrackList = (list) => {
    return list.map((item) => {
      let artist = "";
      if (item.artists.length > 1) {
        item.artists.map((value, index) => {
          artist += `${value.name} ft. `
        })
      } else {
        artist = item.artists[0].name;
      }

      return (
        <CardContainer 
          imgUrl={item.album.images[0].url}
          altImg="An Track Image"
          artistName={artist}
          trackTitle={item.name}
          btnName="Select"
          key={item.id}
        />
      );
    })
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleClick = async () => {
    let token = this.getHashParam().access_token;
    let tokenType = this.getHashParam().token_type;

    await this.getApiCall(this.state.query, token, tokenType);
  }

  render() {
    return (
      <div>
        <h1>Create Playlist</h1>
        <div className="form">
            <input type="text" placeholder="Type Here" onChange={this.handleChange} value={this.state.query}/>
            <button onClick={this.handleClick}>Search</button>
          </div>
        <h2>Artists</h2>
        <div className="TrackList">  
          {this.getArtistList(this.state.artistList)}
        </div>
        <h2>Albums</h2>
        <div className="TrackList">
          {this.getAlbumList(this.state.albumList)}
        </div>
        <h2>Tracks</h2>
        <div className="TrackList">
          {this.getTrackList(this.state.trackList)}
        </div>
      </div>
    );
  }
}

export default Home;
