import React, { useEffect, ReactElement } from "react";
import { NavBar, Sidebar } from "../../components";
import {
  getIsLoggedIn,
  getUserId,
  getImageUrl,
  getToken,
  getTokenType,
} from "../../redux/credential-slice";
import style from "./style.module.css";
import { getHashParams } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserId } from "../../api/user-api";
import { CredentialProps } from "../../interface/api";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";

function Home(): ReactElement {
  const { token, tokenType, imgUrl, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const dispatch = useAppDispatch();

  // Ant Design Layout
  const { Header, Content } = Layout;

  useEffect(() => {
    const token = getHashParams(document.location.hash).get("access_token");
    const tokenType = getHashParams(document.location.hash).get("token_type");
    dispatch(getToken(token));
    dispatch(getTokenType(tokenType));
    if (token === null) {
      dispatch(getToken(localStorage.getItem("userToken")));
      dispatch(getTokenType(localStorage.getItem("tokenType")));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const props: CredentialProps = {
        token: token,
        tokenType: tokenType,
      };

      fetchUserId(props).then((response) => {
        dispatch(getUserId(response.data.id));
        dispatch(getImageUrl(response.data.images[0].url));
      });
      dispatch(getIsLoggedIn(true));
    }
  });

  return (
    <div>
      {isLoggedin && localStorage.getItem("userToken") && (
        <Redirect to="/home" />
      )}
      <Layout>
        <Header>
          <NavBar isUserLoggedin={isLoggedin} imageUrl={imgUrl} />
        </Header>
        <Layout>
          <Sidebar keyNav="home" />
          <Content className={style.MainContent}>
            <h1>Home</h1>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
