import React, { ReactElement } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { InputEvent } from "../../interface/event";
import style from "./style.module.css";

interface Props {
  handleChange?: (value: InputEvent) => void;
  handleSubmit?: () => void;
  value?: string;
  placeholder?: string;
}

function SearchForm(props: Props): ReactElement {
  const { Search } = Input;

  return (
    <Search
      placeholder={props.placeholder}
      onSearch={props.handleSubmit}
      value={props.value}
      onChange={props.handleChange}
      allowClear
      enterButton
      size="large"
      className={style.SearchForm}
      data-testid="search_form"
    />
  );
}

export default SearchForm;
