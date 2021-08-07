import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SearchForm } from "..";
import { SIGNIN_URL } from "../../utils/constants";
import { Button } from "antd";
import style from "./style.module.css";
import { getToken, getUserId } from "../../redux/credential-slice";
import { InputEvent } from "../../interface/event";

interface Props {
  handleChange: (event: InputEvent) => void;
  handleSubmit: () => void;
  inputValue: string;
  isUserLoggedin: boolean;
  imageUrl: string;
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
    if (props.imageUrl !== "") {
      return (
        <div className={style.Dropdown}>
          <img src={props.imageUrl} className={style.ProfileImage} />
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
          handleChange={props.handleChange}
          value={props.inputValue}
          handleSubmit={props.handleSubmit}
        />
      </div>
      <div className={style.RightSideNav}>
        {checkUserLoggedIn()}
        {checkImageProfile()}
      </div>
    </div>
  );
}

export default NavBar;
