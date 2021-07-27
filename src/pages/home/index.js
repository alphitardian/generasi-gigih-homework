import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardContainer,
  NavBar,
  TrackList,
  PlaylistForm,
} from "../../components/";
import axios from "axios";
import { fetchUserId, getHashParams } from "../../redux/credential-slice";
import {
  getSelectedList,
  getSelectedUri,
  searchTrack,
} from "../../redux/track-slice";
import { SPOTIFY_ENDPOINT } from "../../utils/constants";
import "./style.css";

function Home() {
  const { userId, token, tokenType } = useSelector((state) => state.credential);
  const { trackList, selectedList, selectedUri } = useSelector(
    (state) => state.track
  );
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [isFormActive, setFormActive] = useState(false);
  const [inputValue, setInputValue] = useState({
    titlePlaylist: "",
    descPlaylist: "",
  });

  useEffect(() => {
    dispatch(getHashParams(document.location.hash));
  }, []);

  // API Call
  const createPlaylist = async () => {
    const data = {
      name: inputValue.titlePlaylist,
      public: false,
      collaborative: false,
      description: inputValue.descPlaylist,
    };

    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${SPOTIFY_ENDPOINT}/users/${userId}/playlists`,
      data,
      config
    );

    setInputValue({
      titlePlaylist: "",
      descPlaylist: "",
    });
    addItemToPlaylist(response.data.id);
    alert(`${inputValue.titlePlaylist} Playlist added successfully!`);
  };

  const addItemToPlaylist = async (playlistId) => {
    const data = {
      uris: selectedUri,
    };
    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${SPOTIFY_ENDPOINT}/playlists/${playlistId}/tracks`,
      data,
      config
    );

    console.log(response);
  };

  // Handle Input change
  const handleChange = (event) => setQuery(event.target.value);

  const handleOnChangePlaylist = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // Handle onClick / Submit
  const handleSubmit = async () => {
    if (query === "") {
      alert("Please fill the search input first");
    } else {
      const keyword = query.replace(" ", "+");
      dispatch(searchTrack(keyword, token, tokenType));
      setQuery("");
      console.log(trackList);
      dispatch(fetchUserId(token, tokenType));
    }
  };

  const handleCreatePlaylistForm = async () => {
    setFormActive(!isFormActive);
  };

  const handleSubmitPlaylist = async (event) => {
    event.preventDefault();

    if (inputValue.titlePlaylist !== "" && inputValue.descPlaylist !== "") {
      if (
        inputValue.titlePlaylist.length >= 10 &&
        inputValue.descPlaylist.length >= 20
      ) {
        if (selectedUri.length === 0) {
          alert("Please choose tracks you want to add");
        } else {
          await createPlaylist();
        }
      } else {
        alert("Minimum title is 10 character & description is 20");
      }
    } else {
      alert("Please add title and description for your playlist");
    }
  };

  // Handle list
  const handleSelectedTrack = (trackUri, data) => {
    if (selectedUri.includes(trackUri)) {
      dispatch(
        getSelectedUri([...selectedUri.filter((uri) => uri !== trackUri)])
      );

      const filter = selectedList.filter((item) => item.uri !== trackUri);
      dispatch(getSelectedList([...filter]));
    } else {
      dispatch(getSelectedUri([...selectedUri, trackUri]));
      dispatch(getSelectedList([...selectedList, data]));
    }
  };

  const getTrackList = (list, enableBtn) => {
    let arr = list.map((item) => item.uri);
    let filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));

    return filter.map((item) => {
      let artist = "";
      if (item.artists.length > 1) {
        item.artists.forEach((value) => {
          artist += `${value.name} ft. `;
        });
      } else {
        artist = item.artists[0].name;
      }

      let image = checkImageAvailability(item.album);

      return (
        <CardContainer
          imgUrl={image[0]}
          altImg={image[0] > 0 ? "An Track Image" : "No Image Available"}
          artistName={artist}
          trackTitle={item.name}
          btnName={selectedUri.includes(item.uri) ? "Deselect" : "Select"}
          enableBtn={enableBtn}
          onClick={() => {
            handleSelectedTrack(item.uri, item);
          }}
          key={item.uri}
        />
      );
    });
  };

  // Other utils
  const checkImageAvailability = (list) => {
    let image = [];
    if (list.images.length > 0) {
      list.images.forEach((item) => {
        image.push(item.url);
      });
    } else {
      image = "";
    }
    return image;
  };

  const isDataEmpty = (list) => {
    if (list.length > 0) {
      return (
        <div>
          {isFormActive ? (
            <PlaylistForm
              titleValue={inputValue.titlePlaylist}
              descValue={inputValue.descPlaylist}
              handleSubmit={handleSubmitPlaylist}
              onChange={handleOnChangePlaylist}
            />
          ) : (
            <></>
          )}
          {selectedList.length > 0 ? (
            <div>
              <TrackList
                title="User Choice"
                list={getTrackList(selectedList, false)}
              />
            </div>
          ) : (
            <></>
          )}
          <TrackList title="Tracks" list={getTrackList(trackList, true)} />
        </div>
      );
    } else {
      return <h1 className="NoDataPlaceholder">No Data Available</h1>;
    }
  };

  return (
    <div>
      <NavBar
        handleChange={handleChange}
        inputValue={query}
        handleSubmit={handleSubmit}
        handleClick={handleCreatePlaylistForm}
        isFormActive={isFormActive}
      />
      <div className="SearchResult">{isDataEmpty(trackList)}</div>
    </div>
  );
}

export default Home;
