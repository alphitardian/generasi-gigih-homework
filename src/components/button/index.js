import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Button({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="ButtonContainer">
      <a href={link}>
        <button
          className="SelectBtn"
          onClick={() => {
            onClick();
            setSelected(!isSelected);
          }}
        >
          {isSelected ? "Deselect" : name}
        </button>
      </a>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
