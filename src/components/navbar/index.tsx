import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { SIGNIN_URL } from "../../utils/constants";
import { Button } from "antd";
import style from "./style.module.css";

interface Props {
  isUserLoggedin?: boolean;
  imageUrl?: string;
}

function NavBar(props: Props): ReactElement {
  const { selectedList } = useAppSelector((state) => state.track);

  const handleAlert = () => {
    alert("Please choose your track first");
  };

  const checkUserLoggedIn = () => {
    if (props.isUserLoggedin) {
      if (selectedList.length > 0) {
        return (
          <Link
            to="/create-playlist"
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
        <div>
          <img
            src={props.imageUrl}
            className={style.ProfileImage}
            data-testid="profile_img"
          />
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
        <div className={style.AppIcon}>
          <i className="fab fa-spotify fa-2x"></i>
        </div>
        <Link to="/home">
          <h1>Spotifai</h1>
        </Link>
      </div>
      <div className={style.RightSideNav}>
        {checkUserLoggedIn()}
        {checkImageProfile()}
      </div>
    </div>
  );
}

export default NavBar;
