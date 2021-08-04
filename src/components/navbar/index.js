import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { SearchForm } from "..";
import { SIGNIN_URL } from "../../utils/constants";
import { Button } from "antd";
import style from "./style.module.css";
import { getToken, getUserId } from "../../redux/credential-slice";

function NavBar({
  handleChange,
  handleSubmit,
  inputValue,
  isUserLoggedin,
  imageUrl,
}) {
  const { selectedList } = useSelector((state) => state.track);
  const dispatch = useDispatch();

  const handleAlert = () => {
    alert("Please choose your track first");
  };

  const handleLogOut = () => {
    dispatch(getUserId(""));
    dispatch(getToken(""));
    location.reload();
  };

  const checkUserLoggedIn = () => {
    if (isUserLoggedin) {
      if (selectedList.length > 0) {
        return (
          <Link
            to="/create-playlist"
            type="primary"
            className={style.ActiveButton}
          >
            Create Playlist
          </Link>
        );
      } else {
        return (
          <Button onClick={handleAlert} className={style.PlaylistButton}>
            Create Playlist
          </Button>
        );
      }
    }
  };

  const checkImageProfile = () => {
    if (imageUrl !== "") {
      return (
        <div className={style.Dropdown}>
          <img src={imageUrl} className={style.ProfileImage} />
          <div className={style.DropdownContent}>
            <Button
              onClick={handleLogOut}
              type="primary"
              danger
              className={style.LogOutButton}
            >
              <a href="/">Log Out</a>
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <Button className={style.PlaylistButton} href={SIGNIN_URL}>
          Login
        </Button>
      );
    }
  };

  return (
    <div className={style.Navbar}>
      <div className={style.LeftSideNav}>
        <h1>Spotifai</h1>
        <SearchForm
          placeholder="Search"
          handleChange={handleChange}
          value={inputValue}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className={style.RightSideNav}>
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
