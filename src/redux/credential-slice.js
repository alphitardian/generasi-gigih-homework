import { createSlice } from "@reduxjs/toolkit";
import { getHashParams } from "../utils/utils";

// Slice
export const credentialSlice = createSlice({
  name: "credential",
  initialState: {
    userId: "",
    token: "",
    tokenType: "",
    imgUrl: "",
    isLoggedin: false,
  },
  reducers: {
    getUserId: (state, action) => {
      state.userId = action.payload;
    },
    getToken: (state, action) => {
      state.token = getHashParams(action.payload).get("access_token");
    },
    getTokenType: (state, action) => {
      state.tokenType = getHashParams(action.payload).get("token_type");
    },
    getImageUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    getIsLoggedIn: (state, action) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const { getToken, getTokenType, getUserId, getImageUrl, getIsLoggedIn } =
  credentialSlice.actions;

export default credentialSlice.reducer;
