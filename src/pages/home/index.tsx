import React, { useEffect, ReactElement } from "react";
import { CardContainer, NavBar, Sidebar } from "../../components";
import style from "./style.module.css";
import { showGreeting } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CredentialProps } from "../../interface/api";
import { Layout } from "antd";
import {
  getAllNewReleases,
  getTopUserShows,
  getUserPlaylists,
} from "../../api/track-api";
import {
  getNewReleases,
  getUserPlaylist,
  getUserShows,
} from "../../redux/track-slice";

function Home(): ReactElement {
  const { token, tokenType, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const { newReleases, userShows, userPlaylists } = useAppSelector(
    (state) => state.track
  );
  const { imgUrl, name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Ant Design Layout
  const { Header, Content } = Layout;

  const credentialProps: CredentialProps = {
    token: token,
    tokenType: tokenType,
  };

  useEffect(() => {
    if (token) {
      getAllNewReleases(credentialProps).then((response) => {
        dispatch(getNewReleases(response.data.albums.items));
      });
      getTopUserShows(credentialProps).then((response) => {
        dispatch(getUserShows(response.data.items));
      });
      getUserPlaylists(credentialProps).then((response) => {
        dispatch(getUserPlaylist(response.data.items));
      });
    }
  }, []);

  const displayNewReleases = () => {
    return (
      <div>
        <h2 className={style.SubHeading}>New Releases</h2>
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
        <h2 className={style.SubHeading}>Your Top Shows</h2>
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

  const displayUserPlaylists = () => {
    return (
      <div>
        <h2 className={style.SubHeading}>Your Playlists</h2>
        <div className={style.TrackContent}>
          {userPlaylists.map((item) => {
            return (
              <CardContainer
                enableBtn={false}
                key={item.uri}
                trackTitle={item.name}
                artistName={item.owner.display_name}
                imgUrl={item.images[0].url}
                altImg={item.name}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <Header>
          <NavBar isUserLoggedin={isLoggedin} imageUrl={imgUrl} />
        </Header>
        <Layout>
          <Sidebar keyNav="home" />
          <Content className={style.MainContent}>
            <div>
              {showGreeting(name)}
              <div>{displayNewReleases()}</div>
              <div>{displayUserShows()}</div>
              <div>{displayUserPlaylists()}</div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
