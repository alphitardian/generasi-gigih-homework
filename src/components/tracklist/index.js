import React from "react";
import "./style.css";

function TrackList(props) {
  const { title, list } = props;
  return (
    <div className="ListContainer">
      <h2>{title}</h2>
      <div className="TrackList">{list}</div>
    </div>
  );
}

export default TrackList;
