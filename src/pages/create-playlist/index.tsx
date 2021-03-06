import React, { ReactElement, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  PlaylistForm,
  TrackList,
  CardContainer,
  NavBar,
  Sidebar,
} from "../../components";
import {
  checkImageAvailability,
  filterTrackList,
  displayArtistName,
} from "../../utils/utils";
import { createPlaylist, addItemToPlaylist } from "../../api/track-api";
import { PlaylistProps, TrackResponseType } from "../../interface/api";
import { InputEvent, OnClickEvent } from "../../interface/event";
import style from "./style.module.css";
import { Layout } from "antd";

function CreatePlaylist(): ReactElement {
  const { userId, token, tokenType, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const { selectedList, selectedUri } = useAppSelector((state) => state.track);
  const { imgUrl } = useAppSelector((state) => state.user);

  const [inputValue, setInputValue] = useState({
    titlePlaylist: "",
    descPlaylist: "",
  });

  const { Header, Content } = Layout;

  const diplayTrackList = (list: TrackResponseType[], enableBtn: boolean) => {
    return filterTrackList(list).map((item: TrackResponseType) => {
      const artist = displayArtistName(item.artists);
      const image = checkImageAvailability(item.album);

      return (
        <CardContainer
          imgUrl={image[0]}
          altImg={image[0] > 0 ? "An Track Image" : "No Image Available"}
          artistName={artist}
          trackTitle={item.name}
          btnName={selectedUri.includes(item.uri) ? "Deselect" : "Select"}
          enableBtn={enableBtn}
          key={item.uri}
        />
      );
    });
  };

  const postCreatePlaylist = () => {
    const propsCreate: PlaylistProps = {
      playlistTitle: inputValue.titlePlaylist,
      description: inputValue.descPlaylist,
      token: token,
      tokenType: tokenType,
      userId: userId,
    };

    createPlaylist(propsCreate).then((response) => {
      const playlistId = response.data.id;
      const propsAddItem: PlaylistProps = {
        playlistId: playlistId,
        selectedUri: selectedUri,
        token: token,
        tokenType: tokenType,
      };

      addItemToPlaylist(propsAddItem);

      setInputValue({
        titlePlaylist: "",
        descPlaylist: "",
      });
      alert(`${inputValue.titlePlaylist} Playlist added successfully!`);
    });
  };

  const handleOnChangePlaylist = (event: InputEvent) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmitPlaylist = (event: OnClickEvent) => {
    event.preventDefault();

    if (inputValue.titlePlaylist !== "" && inputValue.descPlaylist !== "") {
      if (
        inputValue.titlePlaylist.length >= 10 &&
        inputValue.descPlaylist.length >= 20
      ) {
        if (selectedUri.length === 0) {
          alert("Please choose tracks you want to add");
        } else {
          postCreatePlaylist();
        }
      } else {
        alert("Minimum title is 10 character & description is 20");
      }
    } else {
      alert("Please add title and description for your playlist");
    }
  };

  return (
    <Layout>
      <Header>
        <NavBar isUserLoggedin={isLoggedin} imageUrl={imgUrl} />
      </Header>
      <Layout>
        <Sidebar keyNav="create-playlist" />
        <Content className={style.PlaylistContainer}>
          <h1>Create Playlist</h1>
          <PlaylistForm
            titleValue={inputValue.titlePlaylist}
            descValue={inputValue.descPlaylist}
            handleSubmit={handleSubmitPlaylist}
            onChange={handleOnChangePlaylist}
          />
          <TrackList
            title="User Choice"
            query=""
            list={diplayTrackList(selectedList, false)}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default CreatePlaylist;
