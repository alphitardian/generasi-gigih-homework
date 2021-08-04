import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function TrackList({ title, list }) {
  return (
    <div className={style.ListContainer}>
      <h2 className={style.Heading}>{title}</h2>
      <div className={style.TrackList}>{list}</div>
    </div>
  );
}

TrackList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default TrackList;
