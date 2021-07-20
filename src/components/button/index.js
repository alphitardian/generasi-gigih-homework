import React from "react";
import "./style.css";

function Button({ name, onClick, link }) {
  return (
    <div>
      <a href={link}>
        <button className="SelectBtn" onClick={onClick}>
          {name}
        </button>
      </a>
    </div>
  );
}

export default Button;
