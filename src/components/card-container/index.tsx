import React, { ReactElement } from "react";
import { Image } from "..";
import { Card, Button } from "antd";
import style from "./style.module.css";

interface Props {
  imgUrl: string;
  altImg: string;
  trackTitle: string;
  artistName: string;
  btnName: string;
  enableBtn: boolean;
  onClick?: () => void;
}

function CardContainer(props: Props): ReactElement {
  return (
    <Card hoverable className={style.Container}>
      <Image source={props.imgUrl} alternative={props.altImg} />
      <h2 className={style.TrackTitleText}>{props.trackTitle}</h2>
      <p className={style.ArtistText}>{props.artistName}</p>
      {props.enableBtn ? (
        <Button
          type="primary"
          shape="round"
          size="large"
          block
          onClick={props.onClick}
        >
          {props.btnName}
        </Button>
      ) : (
        <></>
      )}
    </Card>
  );
}

export default CardContainer;
