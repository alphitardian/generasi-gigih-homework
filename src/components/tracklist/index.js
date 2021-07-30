import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function TrackList({ title, list }) {
  return (
    <div className="ListContainer">
      <h2>{title}</h2>
      <div className="TrackList">{list}</div>
    </div>
  );
}

TrackList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default TrackList;
