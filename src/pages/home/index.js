import React from "react";
import { CardContainer } from "../../components/";
import { playlist } from "../../utils/Data";
import './style.css'

function Home() {
  const playlistData = playlist.map((item, index) => {
    return (
      <CardContainer 
        imgUrl={item.album.images[0].url}
        altImg="An Album Image"
        artistName={item.album.artists[0].name}
        trackTitle={item.name}
        btnName="Select"
        key={item.id}
      />
    )
  });

  return (
    <div>
      <h1>Create Playlist</h1>
      <div className="TrackList">
        {playlistData}
      </div>
    </div>
  );
}

export default Home;
