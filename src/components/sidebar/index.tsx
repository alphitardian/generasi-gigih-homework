import React, { ReactElement, useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeFilled, SearchOutlined, UserOutlined } from "@ant-design/icons";
import style from "./style.module.css";

interface Props {
  keyNav: string;
}

function Sidebar(props: Props): ReactElement {
  const [navCollapse, setNavCollapse] = useState(false);

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
          Profile
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
