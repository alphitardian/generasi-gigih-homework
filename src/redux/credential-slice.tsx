import { createSlice } from "@reduxjs/toolkit";
import { SliceState } from "../interface/credential-redux";

const initialState: SliceState = {
  userId: "",
  token: "",
  tokenType: "",
  imgUrl: "",
  isLoggedin: false,
};

// Slice
export const credentialSlice = createSlice({
  name: "credential",
  initialState: initialState,
  reducers: {
    getUserId: (state, action) => {
      state.userId = action.payload;
    },
    getToken: (state, action) => {
      state.token = action.payload;
      if (state.token !== null) {
        localStorage.setItem("userToken", state.token);
      }
    },
    getTokenType: (state, action) => {
      state.tokenType = action.payload;
      if (state.tokenType !== null) {
        localStorage.setItem("tokenType", state.tokenType);
      }
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
