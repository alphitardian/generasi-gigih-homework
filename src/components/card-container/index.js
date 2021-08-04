import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../components";
import { Card, Button } from "antd";
import style from "./style.module.css";

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
    <Card hoverable className={style.Container}>
      <Image source={imgUrl} alternative={altImg} />
      <h2 className={style.TrackTitleText}>{trackTitle}</h2>
      <p className={style.ArtistText}>{artistName}</p>
      {enableBtn ? (
        <Button
          type="primary"
          shape="round"
          size="large"
          block
          onClick={onClick}
        >
          {btnName}
        </Button>
      ) : (
        <></>
      )}
    </Card>
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
