import React from "react";
import PropTypes from "prop-types";
import { Button, Image } from "../../components";
import "./style.css";

function CardContainer({
  imgUrl,
  altImg,
  trackTitle,
  artistName,
  btnName,
  enableBtn,
  onClick,
}) {
  return (
    <div className="Container">
      <Image source={imgUrl} alternative={altImg} />
      <h2 className="TrackTitleText">{trackTitle}</h2>
      <p className="ArtistText">{artistName}</p>
      {enableBtn ? (
        <Button className="SelectBtn" name={btnName} onClick={onClick} />
      ) : (
        <></>
      )}
    </div>
  );
}

CardContainer.propTypes = {
  imgUrl: PropTypes.any,
  altImg: PropTypes.string,
  trackTitle: PropTypes.string,
  artistName: PropTypes.string,
  btnName: PropTypes.string,
  enableBtn: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CardContainer;
