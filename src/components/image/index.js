import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Image({ source, alternative }) {
  return (
    <div>
      <img className="AlbumImg" src={source} alt={alternative} />
    </div>
  );
}

Image.propTypes = {
  source: PropTypes.string,
  alternative: PropTypes.string,
};

export default Image;
