import React, { ReactElement, useEffect } from "react";
import { Button, Layout } from "antd";
import { NavBar } from "../../components";
import style from "./style.module.css";
import image from "../../assets/Music_Isometric.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getIsLoggedIn,
  getToken,
  getTokenType,
  getUserId,
} from "../../redux/credential-slice";
import { getHashParams } from "../../utils/utils";
import { fetchUserId } from "../../api/user-api";
import {
  getImageUrl,
  getName,
  getCountry,
  getEmail,
  getProduct,
} from "../../redux/user-slice";
import { CredentialProps } from "../../interface/api";
import { SIGNIN_URL } from "../../utils/constants";
import { Redirect } from "react-router-dom";

function Login(): ReactElement {
  const { token, tokenType, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const dispatch = useAppDispatch();

  const { Header, Content, Footer } = Layout;

  const credentialProps: CredentialProps = {
    token: token,
    tokenType: tokenType,
  };

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
      fetchUserId(credentialProps)
        .then((response) => {
          dispatch(getUserId(response.data.id));
          dispatch(getImageUrl(response.data.images[0].url));
          dispatch(getName(response.data.display_name));
          dispatch(getCountry(response.data.country));
          dispatch(getEmail(response.data.email));
          dispatch(getProduct(response.data.product));
        })
        .catch((error) => {
          if (error.response.data.error.status === 401) {
            dispatch(getIsLoggedIn(false));
            localStorage.removeItem("userToken");
          }
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
          <NavBar isUserLoggedin={false} imageUrl="" />
        </Header>
        <Content className={style.MainContent}>
          <div className={style.Greeting} data-testid="greeting">
            <h1>Cheer Up Your Day With Your Playlist!</h1>
            <p>Join Now and Create Your Playlist!</p>
            <Button type="primary" data-testid="login_button_content">
              <a href={SIGNIN_URL}>Login</a>
            </Button>
          </div>
          <img
            src={image}
            alt="Music Illustration"
            data-testid="illustration_img"
          />
        </Content>
        <Footer className={style.Footer} data-testid="footer">
          <p>&copy; Ardian Pramudya Alphita</p>
        </Footer>
      </Layout>
    </div>
  );
}

export default Login;
