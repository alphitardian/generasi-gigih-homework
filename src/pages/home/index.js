import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardContainer, NavBar, TrackList } from "../../components/";
import {
  getIsLoggedIn,
  getUserId,
  getImageUrl,
  getToken,
  getTokenType,
} from "../../redux/credential-slice";
import {
  getTrackList,
  getSelectedList,
  getSelectedUri,
} from "../../redux/track-slice";
import "./style.css";
import {
  checkImageAvailability,
  filterTrackList,
  displayArtistName,
} from "../../utils/utils";
import { fetchUserId } from "../../api/user-api";
import { searchTrack } from "../../api/track-api";

function Home() {
  const { token, tokenType, imgUrl, isLoggedin } = useSelector(
    (state) => state.credential
  );
  const { trackList, selectedList, selectedUri } = useSelector(
    (state) => state.track
  );
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getToken(document.location.hash));
    dispatch(getTokenType(document.location.hash));
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserId(token, tokenType).then((response) => {
        dispatch(getUserId(response.data.id));
        dispatch(getImageUrl(response.data.images[0].url));
      });
      dispatch(getIsLoggedIn(true));
    }
  });

  const handleChange = (event) => setQuery(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query === "") {
      alert("Please fill the search input first");
    } else {
      if (isLoggedin) {
        const keyword = query.replace(" ", "+");
        searchTrack(keyword, token, tokenType).then((response) => {
          dispatch(getTrackList([...response.data.tracks.items]));
        });
        setQuery("");
      } else {
        alert("Please Login first");
      }
    }
  };

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
          onClick={() => {
            handleSelectedTrack(item.uri, item);
          }}
          key={item.uri}
        />
      );
    });
  };

  // Other utils
  const isDataEmpty = (list) => {
    if (list.length > 0) {
      return (
        <div>
          {selectedList.length > 0 ? (
            <div>
              <TrackList
                title="User Choice"
                list={diplayTrackList(selectedList, false)}
              />
            </div>
          ) : (
            <></>
          )}
          <TrackList title="Tracks" list={diplayTrackList(trackList, true)} />
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
        isUserLoggedin={isLoggedin}
        imgUrl={imgUrl}
      />
      <div className="SearchResult">{isDataEmpty(trackList)}</div>
    </div>
  );
}

export default Home;
