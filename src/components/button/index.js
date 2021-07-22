import React, { useState } from "react";
import "./style.css";

function Button({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <div>
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

export default Button;
