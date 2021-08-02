import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function PlaylistForm({ titleValue, descValue, handleSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="PlaylistForm">
        <input
          className="InputForm"
          type="text"
          placeholder="Playlist Title"
          value={titleValue}
          onChange={onChange}
          name="titlePlaylist"
          minLength="10"
        />
        <input
          className="InputForm"
          type="text"
          placeholder="Playlist Description"
          value={descValue}
          onChange={onChange}
          name="descPlaylist"
          minLength="20"
        />
        <button className="CreateButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

PlaylistForm.propTypes = {
  titleValue: PropTypes.string,
  descValue: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default PlaylistForm;
