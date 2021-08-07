import { configureStore } from "@reduxjs/toolkit";
import credentialReducer from "./credential-slice";
import trackReducer from "./track-slice";

const store = configureStore({
  reducer: {
    credential: credentialReducer,
    track: trackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
