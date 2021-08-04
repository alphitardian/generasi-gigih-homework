import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";
import style from "./style.module.css";

function PlaylistForm({ titleValue, descValue, handleSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.PlaylistForm}>
        <Input
          type="text"
          placeholder="Playlist Title"
          value={titleValue}
          onChange={onChange}
          name="titlePlaylist"
          minLength="10"
          size="large"
        />
        <Input
          type="text"
          placeholder="Playlist Description"
          value={descValue}
          onChange={onChange}
          name="descPlaylist"
          minLength="20"
          size="large"
        />
        <Button
          className={style.CreateButton}
          type="primary"
          block
          onClick={handleSubmit}
        >
          Create
        </Button>
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
