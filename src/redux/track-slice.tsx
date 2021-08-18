import { createSlice } from "@reduxjs/toolkit";
import {
  NewReleaseResponseType,
  PlaylistResponseDetail,
  ShowsResponse,
  TrackResponseType,
} from "../interface/api";

export interface SliceState {
  trackList: TrackResponseType[];
  selectedList: TrackResponseType[];
  selectedUri: string[];
  newReleases: NewReleaseResponseType[];
  userShows: ShowsResponse[];
  userPlaylists: PlaylistResponseDetail[];
}

const initialState: SliceState = {
  trackList: [],
  selectedList: [],
  selectedUri: [],
  newReleases: [],
  userShows: [],
  userPlaylists: [],
};

export const trackSlice = createSlice({
  name: "track",
  initialState: initialState,
  reducers: {
    getTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    getSelectedList: (state, action) => {
      state.selectedList = action.payload;
    },
    getSelectedUri: (state, action) => {
      state.selectedUri = action.payload;
    },
    getNewReleases: (state, action) => {
      state.newReleases = action.payload;
    },
    getUserShows: (state, action) => {
      state.userShows = action.payload;
    },
    getUserPlaylist: (state, action) => {
      state.userPlaylists = action.payload;
    },
  },
});

export const {
  getTrackList,
  getSelectedList,
  getSelectedUri,
  getNewReleases,
  getUserShows,
  getUserPlaylist,
} = trackSlice.actions;

export default trackSlice.reducer;
