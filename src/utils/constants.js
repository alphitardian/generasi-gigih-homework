/* eslint-disable no-undef */
export const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";
export const API_SCOPE =
  "playlist-modify-private user-library-read user-read-email user-read-private playlist-read-private playlist-read-collaborative";
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
export const SIGNIN_URL = `https://accounts.spotify.com/en/authorize?client_id=${
  process.env.REACT_APP_SPOTIFY_CLIENT_ID
}&response_type=${"token"}&redirect_uri=${
  process.env.REACT_APP_REDIRECT_URL
}&scope=${API_SCOPE}`;
