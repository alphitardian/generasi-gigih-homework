import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import "antd/dist/antd.css";

function SearchForm({ handleChange, handleSubmit, value, placeholder }) {
  const { Search } = Input;

  return (
    <Search
      placeholder={placeholder}
      onSearch={handleSubmit}
      value={value}
      onChange={handleChange}
      allowClear
      enterButton
      size="large"
      style={{ width: 300 }}
    />
  );
}

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchForm;
