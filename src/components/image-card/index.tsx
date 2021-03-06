import React, { ReactElement } from "react";
import style from "./style.module.css";

interface Props {
  source: string;
  alternative: string;
}

function Image(props: Props): ReactElement {
  return (
    <div>
      <img
        data-testid="track_image"
        className={style.AlbumImg}
        src={props.source}
        alt={props.alternative}
      />
    </div>
  );
}

export default Image;
