import React, { useState } from "react";
import "./style.css";

function Button({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="ButtonContainer">
      <button
        className="SelectBtn"
        onClick={() => {
          onClick();
          setSelected(!isSelected);
        }}
      >
        <a href={link}>{isSelected ? "Deselect" : name}</a>
      </button>
    </div>
  );
}

export default Button;
