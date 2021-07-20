import React from "react";
import "./style.css";

function SearchForm(props) {
  const { handleChange, handleClick, value, placeholder } = props;

  return (
    <div className="Form">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <button onClick={handleClick} className="FormButton">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
