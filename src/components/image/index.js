import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function Image({ source, alternative }) {
  return (
    <div>
      <img className={style.AlbumImg} src={source} alt={alternative} />
    </div>
  );
}

Image.propTypes = {
  source: PropTypes.string,
  alternative: PropTypes.string,
};

export default Image;
