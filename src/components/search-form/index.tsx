import React, { ReactElement } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { InputEvent } from "../../interface/event";

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
      style={{ width: 300 }}
      data-testid="search_form"
    />
  );
}

export default SearchForm;
