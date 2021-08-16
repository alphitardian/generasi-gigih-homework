import { createSlice } from "@reduxjs/toolkit";
import {
  NewReleaseResponseType,
  ShowsResponse,
  TrackResponseType,
} from "../interface/api";

interface SliceState {
  trackList: TrackResponseType[];
  selectedList: TrackResponseType[];
  selectedUri: string[];
  newReleases: NewReleaseResponseType[];
  userShows: ShowsResponse[];
}

const initialState: SliceState = {
  trackList: [],
  selectedList: [],
  selectedUri: [],
  newReleases: [],
  userShows: [],
};

// Slice
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
  },
});

export const {
  getTrackList,
  getSelectedList,
  getSelectedUri,
  getNewReleases,
  getUserShows,
} = trackSlice.actions;

export default trackSlice.reducer;
