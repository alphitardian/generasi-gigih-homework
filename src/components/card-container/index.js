import React from "react";
import { Button, Image } from "../../components";
import "./style.css";

function CardContainer({
  imgUrl,
  altImg,
  trackTitle,
  artistName,
  btnName,
  onClick,
}) {
  return (
    <div className="Container">
      <Image src={imgUrl} alt={altImg} />
      <h2 className="TrackTitleText">{trackTitle}</h2>
      <p className="ArtistText">{artistName}</p>
      <Button className="SelectBtn" name={btnName} onClick={onClick} />
    </div>
  );
}

export default CardContainer;
