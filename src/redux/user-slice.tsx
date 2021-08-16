import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../interface/user-credential";

const initialState: UserState = {
  name: "",
  imgUrl: "",
  country: "",
  product: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getImageUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    getCountry: (state, action) => {
      state.country = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { getName, getImageUrl, getCountry, getProduct, getEmail } =
  userSlice.actions;

export default userSlice.reducer;
