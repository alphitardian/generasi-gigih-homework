import React from "react";
import { CardContainer } from "../../components/";
import Data from "../../utils/Data";

function Home() {
  const {
    name: trackTitle,
    album: {
      artists: [{ name: artistName }],
      images: [{ url: imgUrl }],
    },
  } = Data;

  return (
    <div>
      <h1>Create Playlist</h1>
      <CardContainer
        imgUrl={imgUrl}
        altImg="An Album Cover Image"
        trackTitle={trackTitle}
        artistName={artistName}
        btnName="Select"
      />
    </div>
  );
}

export default Home;
