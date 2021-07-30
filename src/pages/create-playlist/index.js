import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PlaylistForm, TrackList, CardContainer } from "../../components";
import {
  checkImageAvailability,
  filterTrackList,
  displayArtistName,
} from "../../utils/utils";
import { createPlaylist, addItemToPlaylist } from "../../api/track-api";
import "./style.css";

function CreatePlaylist() {
  const { userId, token, tokenType } = useSelector((state) => state.credential);
  const { selectedList, selectedUri } = useSelector((state) => state.track);

  const [inputValue, setInputValue] = useState({
    titlePlaylist: "",
    descPlaylist: "",
  });

  const diplayTrackList = (list, enableBtn) => {
    return filterTrackList(list).map((item) => {
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
    createPlaylist(
      inputValue.titlePlaylist,
      inputValue.descPlaylist,
      token,
      tokenType,
      userId
    ).then((response) => {
      const playlistId = response.data.id;
      addItemToPlaylist(playlistId, selectedUri, token, tokenType).then(
        (response) => {
          console.log(response);
        }
      );

      setInputValue({
        titlePlaylist: "",
        descPlaylist: "",
      });
      alert(`${inputValue.titlePlaylist} Playlist added successfully!`);
    });
  };

  const handleOnChangePlaylist = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmitPlaylist = (event) => {
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
    <div className="PlaylistContainer">
      <h1>Create Playlist</h1>
      <PlaylistForm
        titleValue={inputValue.titlePlaylist}
        descValue={inputValue.descPlaylist}
        handleSubmit={handleSubmitPlaylist}
        onChange={handleOnChangePlaylist}
      />
      <TrackList
        title="User Choice"
        list={diplayTrackList(selectedList, false)}
      />
    </div>
  );
}

export default CreatePlaylist;
