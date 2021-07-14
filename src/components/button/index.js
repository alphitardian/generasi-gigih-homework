import React from "react";
import "./style.css";

function Button({ name }) {
  return (
    <div>
      <button className="SelectBtn">{name}</button>
    </div>
  );
}

export default Button;
