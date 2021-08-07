import React, { ReactElement } from "react";
import style from "./style.module.css";

interface CardTracks {
  key: string;
  imgUrl: string;
  altImg: string;
  artistName: string;
  trackTitle: string;
  btnName: string;
  enableBtn: boolean;
  onClick: () => void;
}

interface Props {
  title: string;
  list: CardTracks[];
}

function TrackList(props: Props): ReactElement {
  return (
    <div className={style.ListContainer}>
      <h2 className={style.Heading}>{props.title}</h2>
      <div className={style.TrackList}>{props.list}</div>
    </div>
  );
}

export default TrackList;
