import React from "react";
import "./style.css";

function Image({ src, alt }) {
  return (
    <div>
      <img className="AlbumImg" src={src} alt={alt} />
    </div>
  );
}

export default Image;
