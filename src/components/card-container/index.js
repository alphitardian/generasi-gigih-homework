import React from "react";
import { Button, Image } from "../../components";
import "./style.css";

function CardContainer({ imgUrl, altImg, trackTitle, artistName, btnName }) {
  return (
    <div className="Container">
      <Image src={imgUrl} alt={altImg} />
      <h2 className="TrackTitleText">{trackTitle}</h2>
      <p className="ArtistText">{artistName}</p>
      <Button name={btnName} />
    </div>
  );
}

export default CardContainer;
