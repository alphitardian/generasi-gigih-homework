import React, { ReactElement } from "react";
import { Input, Button } from "antd";
import style from "./style.module.css";
import { InputEvent, OnClickEvent } from "../../interface/event";

interface Props {
  titleValue?: string;
  descValue?: string;
  handleSubmit?: (event: OnClickEvent) => void;
  onChange?: (value: InputEvent) => void;
}

function PlaylistForm(props: Props): ReactElement {
  return (
    <div>
      <form className={style.PlaylistForm}>
        <Input
          data-testid="title_input"
          type="text"
          placeholder="Playlist Title"
          value={props.titleValue}
          onChange={props.onChange}
          name="titlePlaylist"
          minLength={10}
          size="large"
        />
        <Input
          data-testid="desc_input"
          type="text"
          placeholder="Playlist Description"
          value={props.descValue}
          onChange={props.onChange}
          name="descPlaylist"
          minLength={20}
          size="large"
        />
        <Button
          data-testid="create_button"
          className={style.CreateButton}
          type="primary"
          block
          onClick={props.handleSubmit}
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default PlaylistForm;
