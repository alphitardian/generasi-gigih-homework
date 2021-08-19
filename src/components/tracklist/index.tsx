import React, { ReactElement } from "react";
import style from "./style.module.css";

interface Props {
  title: string;
  query: string;
  list: ReactElement;
}

function TrackList(props: Props): ReactElement {
  return (
    <div className={style.ListContainer}>
      {props.query !== "" ? (
        <h2 className={style.Heading} data-testid="heading">
          {props.title} for {props.query}
        </h2>
      ) : (
        <h2 className={style.Heading} data-testid="heading">
          {props.title}
        </h2>
      )}
      <div className={style.TrackList}>{props.list}</div>
    </div>
  );
}

export default TrackList;
