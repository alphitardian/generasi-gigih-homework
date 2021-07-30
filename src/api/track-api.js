import axios from "axios";
import { SPOTIFY_ENDPOINT } from "../utils/constants";

export const searchTrack = (query, token, tokenType) => {
  return axios.get(`${SPOTIFY_ENDPOINT}/search`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      q: query,
      type: "album,track,artist",
      limit: 10,
    },
  });
};

export const createPlaylist = (
  playlistTitle,
  description,
  token,
  tokenType,
  userId
) => {
  const data = {
    name: playlistTitle,
    public: false,
    collaborative: false,
    description: description,
  };

  const config = {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    },
  };

  return axios.post(
    `${SPOTIFY_ENDPOINT}/users/${userId}/playlists`,
    data,
    config
  );
};

export const addItemToPlaylist = (
  playlistId,
  selectedUri,
  token,
  tokenType
) => {
  const data = {
    uris: selectedUri,
  };

  const config = {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    },
  };

  return axios.post(
    `${SPOTIFY_ENDPOINT}/playlists/${playlistId}/tracks`,
    data,
    config
  );
};
