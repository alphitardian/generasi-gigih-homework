import React, { ReactElement, useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  SearchOutlined,
  UserOutlined,
  PlusSquareOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserId, getToken } from "../../redux/credential-slice";

interface Props {
  keyNav: string;
}

function Sidebar(props: Props): ReactElement {
  const { isLoggedin } = useAppSelector((state) => state.credential);
  const { selectedUri } = useAppSelector((state) => state.track);
  const dispatch = useAppDispatch();

  const [navCollapse, setNavCollapse] = useState(false);

  const handleLogout = () => {
    dispatch(getUserId(""));
    dispatch(getToken(""));
    localStorage.removeItem("userToken");
    location.reload();
  };

  const handleCreatePlaylist = () => {
    if (selectedUri.length === 0) {
      alert("Please choose your track first");
    }
  };

  return (
    <Layout.Sider
      breakpoint="sm"
      collapsedWidth="0"
      onCollapse={(collapse) => {
        setNavCollapse(collapse);
      }}
      className={navCollapse ? style.NavCollapse : style.NavRegular}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.keyNav]}>
        <Menu.Item key="home" icon={<HomeFilled />} className={style.MenuItem}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item
          key="search"
          icon={<SearchOutlined />}
          className={style.MenuItem}
        >
          <Link to="/search">Search</Link>
        </Menu.Item>
        <Menu.Item
          key="profile"
          icon={<UserOutlined />}
          className={style.MenuItem}
        >
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item
          key="create-playlist"
          icon={<PlusSquareOutlined />}
          className={style.MenuItemCreatePlaylist}
          onClick={handleCreatePlaylist}
        >
          {selectedUri.length > 0 ? (
            <Link to="/create-playlist">Create Playlist</Link>
          ) : (
            <>Create Playlist</>
          )}
        </Menu.Item>
        {isLoggedin === false ? (
          <></>
        ) : (
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            className={style.MenuItemLogout}
            onClick={handleLogout}
          >
            Log Out
          </Menu.Item>
        )}
      </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
