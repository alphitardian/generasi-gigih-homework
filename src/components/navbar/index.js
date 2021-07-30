import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { SearchForm } from "..";
import { SIGNIN_URL } from "../../utils/constants";
import "./style.css";

function NavBar({
  handleChange,
  handleSubmit,
  inputValue,
  isUserLoggedin,
  imageUrl,
}) {
  const { selectedList } = useSelector((state) => state.track);

  const handleAlert = () => {
    alert("Please choose your track first");
  };

  const checkUserLoggedIn = () => {
    if (isUserLoggedin) {
      if (selectedList.length > 0) {
        return (
          <Link to="/create-playlist" className="ActiveButton">
            Create Playlist
          </Link>
        );
      } else {
        return (
          <button className="PlaylistButton" onClick={handleAlert}>
            Create Playlist
          </button>
        );
      }
    }
  };

  const checkImageProfile = () => {
    if (imageUrl !== "") {
      return <img src={imageUrl} className="ProfileImage" />;
    } else {
      return (
        <a className="PlaylistButton" href={SIGNIN_URL}>
          Login
        </a>
      );
    }
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
        {checkUserLoggedIn()}
        {checkImageProfile()}
      </div>
    </div>
  );
}

NavBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValue: PropTypes.string,
  isUserLoggedin: PropTypes.bool,
  imageUrl: PropTypes.string,
};

export default NavBar;
