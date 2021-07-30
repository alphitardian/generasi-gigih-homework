import { createSlice } from "@reduxjs/toolkit";

// Slice
export const trackSlice = createSlice({
  name: "track",
  initialState: {
    trackList: [],
    selectedList: [],
    selectedUri: [],
  },
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
