import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SIGNIN_URL } from "../../utils/constants";
import { Button } from "antd";
import style from "./style.module.css";
import { getToken, getUserId } from "../../redux/credential-slice";

interface Props {
  isUserLoggedin?: boolean;
  imageUrl?: string;
}

function NavBar(props: Props): ReactElement {
  const { selectedList } = useAppSelector((state) => state.track);
  const dispatch = useAppDispatch();

  const handleAlert = () => {
    alert("Please choose your track first");
  };

  const handleLogOut = () => {
    dispatch(getUserId(""));
    dispatch(getToken(""));
    localStorage.removeItem("userToken");
    location.reload();
  };

  const checkUserLoggedIn = () => {
    if (props.isUserLoggedin) {
      if (selectedList.length > 0) {
        return (
          <Link
            to="/create-playlist"
            type="primary"
            className={style.ActiveButton}
            data-testid="create_playlist_button"
          >
            Create Playlist
          </Link>
        );
      } else {
        return (
          <Button
            onClick={handleAlert}
            className={style.PlaylistButton}
            data-testid="create_playlist_button_disabled"
          >
            Create Playlist
          </Button>
        );
      }
    }
  };

  const checkImageProfile = () => {
    if (props.imageUrl !== "") {
      return (
        <div className={style.Dropdown}>
          <img
            src={props.imageUrl}
            className={style.ProfileImage}
            data-testid="profile_img"
          />
          <div className={style.DropdownContent}>
            <Button
              onClick={handleLogOut}
              type="primary"
              danger
              className={style.LogOutButton}
              data-testid="logout_button"
            >
              <a href="/">Log Out</a>
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <Button
          className={style.LoginButton}
          href={SIGNIN_URL}
          data-testid="login_button"
        >
          Login
        </Button>
      );
    }
  };

  return (
    <div className={style.Navbar} data-testid="navbar">
      <div className={style.LeftSideNav}>
        <Link to="/home">
          <h1>Spotifai</h1>
        </Link>
        {/* <SearchForm
          placeholder="Search"
          handleChange={props.handleChange}
          value={props.inputValue}
          handleSubmit={props.handleSubmit}
        /> */}
      </div>
      <div className={style.RightSideNav}>
        {checkUserLoggedIn()}
        {checkImageProfile()}
      </div>
    </div>
  );
}

export default NavBar;
