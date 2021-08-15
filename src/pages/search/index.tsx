import React, { useState, ReactElement } from "react";
import { Layout } from "antd";
import {
  CardContainer,
  NavBar,
  SearchForm,
  Sidebar,
  TrackList,
} from "../../components";
import { InputEvent } from "../../interface/event";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchTrack } from "../../api/track-api";
import {
  getSelectedList,
  getSelectedUri,
  getTrackList,
} from "../../redux/track-slice";
import { SearchProps, TrackResponseType } from "../../interface/api";
import {
  checkImageAvailability,
  displayArtistName,
  filterTrackList,
} from "../../utils/utils";
import style from "./style.module.css";

function SearchScreen(): ReactElement {
  const { token, tokenType, imgUrl, isLoggedin } = useAppSelector(
    (state) => state.credential
  );
  const { trackList, selectedList, selectedUri } = useAppSelector(
    (state) => state.track
  );
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const { Header, Content } = Layout;

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

  const isDataEmpty = (list: TrackResponseType[]) => {
    if (list.length > 0) {
      return (
        <div>
          {selectedList.length > 0 ? (
            <div>
              <TrackList
                title="User Choice"
                query=""
                list={diplayTrackList(selectedList, false)}
              />
            </div>
          ) : (
            <></>
          )}
          <TrackList
            title="Result"
            query={query}
            list={diplayTrackList(trackList, true)}
          />
        </div>
      );
    } else {
      return <h1 className={style.NoDataPlaceholder}>No Data Available</h1>;
    }
  };

  return (
    <Layout>
      <Header>
        <NavBar isUserLoggedin={isLoggedin} imageUrl={imgUrl} />
      </Header>
      <Layout className={style.Container}>
        <Sidebar keyNav="search" />
        <Content className={style.MainContent}>
          <h1>Search</h1>
          <SearchForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={query}
            placeholder="Search Here"
          />
          <div className={style.SearchResult}>{isDataEmpty(trackList)}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default SearchScreen;
