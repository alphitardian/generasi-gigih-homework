import React, { useEffect, ReactElement } from "react";
import { CardContainer, NavBar, Sidebar } from "../../components";
import {
  getIsLoggedIn,
  getUserId,
  getToken,
  getTokenType,
} from "../../redux/credential-slice";
import {
  getCountry,
  getEmail,
  getImageUrl,
  getName,
  getProduct,
} from "../../redux/user-slice";
import style from "./style.module.css";
import { getHashParams, showGreeting } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserId } from "../../api/user-api";
import { CredentialProps } from "../../interface/api";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import { getAllNewReleases, getTopUserShows } from "../../api/track-api";
import { getNewReleases, getUserShows } from "../../redux/track-slice";

function Home(): ReactElement {
  const { token, tokenType, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const { newReleases, userShows } = useAppSelector((state) => state.track);
  const { imgUrl, name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Ant Design Layout
  const { Header, Content } = Layout;

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
      fetchUserId(credentialProps).then((response) => {
        dispatch(getUserId(response.data.id));
        dispatch(getImageUrl(response.data.images[0].url));
        dispatch(getName(response.data.display_name));
        dispatch(getCountry(response.data.country));
        dispatch(getEmail(response.data.email));
        dispatch(getProduct(response.data.product));
      });
      dispatch(getIsLoggedIn(true));
    }
  });

  useEffect(() => {
    if (token) {
      getAllNewReleases(credentialProps).then((response) => {
        dispatch(getNewReleases(response.data.albums.items));
      });
      getTopUserShows(credentialProps).then((response) => {
        dispatch(getUserShows(response.data.items));
      });
    }
  }, []);

  const displayNewReleases = () => {
    return (
      <div>
        <h1 className={style.SubHeading}>New Releases</h1>
        <div className={style.TrackContent}>
          {newReleases.map((item) => {
            return (
              <CardContainer
                enableBtn={false}
                key={item.uri}
                trackTitle={item.name}
                artistName={item.artists[0].name as string}
                imgUrl={item.images[0].url}
                altImg="an Image"
              />
            );
          })}
        </div>
      </div>
    );
  };

  const displayUserShows = () => {
    return (
      <div>
        <h1 className={style.SubHeading}>Your Top Shows</h1>
        <div className={style.TrackContent}>
          {userShows.map((item) => {
            return (
              <CardContainer
                enableBtn={false}
                key={item.show.id}
                trackTitle={item.show.name}
                artistName={item.show.publisher}
                imgUrl={item.show.images[0].url}
                altImg={item.show.name}
              />
            );
          })}
        </div>
      </div>
    );
  };

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
            {isLoggedin ? (
              <div>
                {showGreeting(name)}
                <div>{displayNewReleases()}</div>
                <div>{displayUserShows()}</div>
              </div>
            ) : (
              <h1>Please Log In First</h1>
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
