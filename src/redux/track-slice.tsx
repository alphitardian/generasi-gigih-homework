import { createSlice } from "@reduxjs/toolkit";
import { TrackResponseType } from "../interface/api";

interface SliceState {
  trackList: TrackResponseType[];
  selectedList: TrackResponseType[];
  selectedUri: string[];
}

const initialState: SliceState = {
  trackList: [],
  selectedList: [],
  selectedUri: [],
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
  },
});

export const { getTrackList, getSelectedList, getSelectedUri } =
  trackSlice.actions;

export default trackSlice.reducer;
