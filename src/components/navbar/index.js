import React from "react";
import { SearchForm } from "..";
import "./style.css";

function NavBar(props) {
  const { handleChange, handleClick, inputValue } = props;

  return (
    <div className="Navbar">
      <h1>Spotifai</h1>
      <SearchForm placeholder="Search" handleChange={handleChange} value={inputValue} handleClick={handleClick} />
    </div>
  );
}

export default NavBar;
