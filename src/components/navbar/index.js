import React from "react";
import { SearchForm } from "..";
import "./style.css";

function NavBar({
  handleChange,
  handleSubmit,
  handleClick,
  inputValue,
  isFormActive,
}) {
  return (
    <div className="Navbar">
      <h1>Spotifai</h1>
      <SearchForm
        placeholder="Search"
        handleChange={handleChange}
        value={inputValue}
        handleSubmit={handleSubmit}
      />
      <button
        className={isFormActive ? "ActiveButton" : "PlaylistButton"}
        onClick={handleClick}
      >
        Create Playlist
      </button>
    </div>
  );
}

export default NavBar;
