import React from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "..";
import "./style.css";
import { useSelector } from "react-redux";
import { Button } from "..";
import { SIGNIN_URL } from "../../utils/constants";

function NavBar({
  handleChange,
  handleSubmit,
  handleClick,
  inputValue,
  isUserLoggedin,
  imgUrl,
}) {
  const { selectedList } = useSelector((state) => state.track);

  const handleAlert = () => {
    alert("Please choose your track first");
  };

  return (
    <div className="Navbar">
      <h1>Spotifai</h1>
      <SearchForm
        placeholder="Search"
        handleChange={handleChange}
        value={inputValue}
        handleSubmit={handleSubmit}
      />
      <div className="LeftSideNav">
        {selectedList.length > 0 && isUserLoggedin ? (
          <Link to="/create-playlist" className="ActiveButton">
            Create Playlist
          </Link>
        ) : (
          <button className="PlaylistButton" onClick={handleAlert}>
            Create Playlist
          </button>
        )}
        {imgUrl !== "" ? (
          <img src={imgUrl} className="ProfileImage" />
        ) : (
          <a className="PlaylistButton" href={SIGNIN_URL}>
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default NavBar;
