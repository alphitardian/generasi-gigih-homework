import React, { ReactElement } from "react";
import style from "./style.module.css";
import { Layout } from "antd";
import { NavBar, Sidebar } from "../../components";
import { useAppSelector } from "../../redux/hooks";

function Profile(): ReactElement {
  const { isLoggedin } = useAppSelector((state) => state.credential);
  const { imgUrl, name, email, country, product } = useAppSelector(
    (state) => state.user
  );
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>
          <NavBar isUserLoggedin={isLoggedin} imageUrl={imgUrl} />
        </Header>
        <Layout>
          <Sidebar keyNav="profile" />
          <Content className={style.MainContent}>
            <h1>Profile</h1>
            <div className={style.GridItem}>
              <img src={imgUrl} alt="Profile Image" />
            </div>
            <div className={style.GridItem}>
              <h2>Name</h2>
              <p>{name}</p>
              <h2>Email</h2>
              <p>{email}</p>
              <h2>Country</h2>
              <p>{country}</p>
              <h2>Product Selection</h2>
              <p>{product}</p>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Profile;
