import React, { ReactElement } from "react";
import { Image } from "..";
import { Card, Button } from "antd";
import style from "./style.module.css";

interface Props {
  imgUrl: string;
  altImg: string;
  trackTitle: string;
  artistName: string;
  btnName?: string;
  enableBtn: boolean;
  onClick?: () => void;
}

function CardContainer(props: Props): ReactElement {
  return (
    <Card hoverable className={style.Container}>
      <div className={style.MobileContainer}>
        <div>
          <Image source={props.imgUrl} alternative={props.altImg} />
        </div>
        <div>
          <h2
            className={
              props.enableBtn
                ? style.TrackTitleButtonEnable
                : style.TrackTitleText
            }
            data-testid="track_title"
          >
            {props.trackTitle}
          </h2>
          <p
            className={
              props.enableBtn ? style.ArtistTextButtonEnable : style.ArtistText
            }
            data-testid="artist_name"
          >
            {props.artistName}
          </p>
        </div>
        <div>
          {props.enableBtn ? (
            <Button
              data-testid="select_button"
              type="primary"
              shape="round"
              size="large"
              block
              onClick={props.onClick}
              className={style.Button}
            >
              {props.btnName}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Card>
  );
}

export default CardContainer;
