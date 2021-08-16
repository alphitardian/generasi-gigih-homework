import { createSlice } from "@reduxjs/toolkit";
import { CredentialState } from "../interface/user-credential";

const initialState: CredentialState = {
  userId: "",
  token: "",
  tokenType: "",
  isLoggedin: false,
};

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
    getIsLoggedIn: (state, action) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const { getToken, getTokenType, getUserId, getIsLoggedIn } =
  credentialSlice.actions;

export default credentialSlice.reducer;
