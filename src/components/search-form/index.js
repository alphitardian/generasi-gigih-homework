import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function SearchForm({ handleChange, handleSubmit, value, placeholder }) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="SearchInput"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchForm;
