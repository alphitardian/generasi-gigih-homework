import React, { useState, useEffect, ReactElement } from "react";
import { CardContainer, NavBar, TrackList } from "../../components";
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
import style from "./style.module.css";
import {
  checkImageAvailability,
  filterTrackList,
  displayArtistName,
} from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserId } from "../../api/user-api";
import { searchTrack } from "../../api/track-api";
import {
  CredentialProps,
  SearchProps,
  TrackResponseType,
} from "../../interface/api";
import { InputEvent } from "../../interface/event";

function Home(): ReactElement {
  const { token, tokenType, imgUrl, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const { trackList, selectedList, selectedUri } = useAppSelector(
    (state) => state.track
  );
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getToken(document.location.hash));
    dispatch(getTokenType(document.location.hash));
  }, []);

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

  const handleChange = (event: InputEvent) => setQuery(event.target.value);

  const handleSubmit = async () => {
    if (query === "") {
      alert("Please fill the search input first");
    } else {
      if (isLoggedin) {
        const keyword = query.replace(" ", "+");
        const props: SearchProps = {
          query: keyword,
          token: token,
          tokenType: tokenType,
        };

        searchTrack(props).then((response) => {
          dispatch(getTrackList([...response.data.tracks.items]));
        });
        setQuery("");
      } else {
        alert("Please Login first");
      }
    }
  };

  const handleSelectedTrack = (trackUri: string, data: TrackResponseType) => {
    if (selectedUri.includes(trackUri)) {
      dispatch(
        getSelectedUri([
          ...selectedUri.filter((uri: string) => uri !== trackUri),
        ])
      );

      const filter = selectedList.filter(
        (item: TrackResponseType) => item.uri !== trackUri
      );
      dispatch(getSelectedList([...filter]));
    } else {
      dispatch(getSelectedUri([...selectedUri, trackUri]));
      dispatch(getSelectedList([...selectedList, data]));
    }
  };

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
          onClick={() => {
            handleSelectedTrack(item.uri, item);
          }}
          key={item.uri}
        />
      );
    });
  };

  // Other utils
  const isDataEmpty = (list: TrackResponseType[]) => {
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
      return <h1 className={style.NoDataPlaceholder}>No Data Available</h1>;
    }
  };

  return (
    <div>
      <NavBar
        handleChange={handleChange}
        inputValue={query}
        handleSubmit={handleSubmit}
        isUserLoggedin={isLoggedin}
        imageUrl={imgUrl}
      />
      <div className={style.SearchResult}>{isDataEmpty(trackList)}</div>
    </div>
  );
}

export default Home;
