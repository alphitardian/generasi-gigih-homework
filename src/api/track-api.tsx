import axios, { AxiosPromise } from "axios";
import { SPOTIFY_ENDPOINT } from "../utils/constants";
import { SearchProps, PlaylistProps, CredentialProps } from "../interface/api";

export const searchTrack = (props: SearchProps): AxiosPromise => {
  return axios.get(`${SPOTIFY_ENDPOINT}/search`, {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      q: props.query,
      type: "album,track,artist",
      limit: 20,
    },
  });
};

export const createPlaylist = (props: PlaylistProps): AxiosPromise => {
  const data = {
    name: props.playlistTitle,
    public: false,
    collaborative: false,
    description: props.description,
  };

  const config = {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
      "Content-Type": "application/json",
    },
  };

  return axios.post(
    `${SPOTIFY_ENDPOINT}/users/${props.userId}/playlists`,
    data,
    config
  );
};

export const addItemToPlaylist = (props: PlaylistProps): AxiosPromise => {
  const data = {
    uris: props.selectedUri,
  };

  const config = {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
      "Content-Type": "application/json",
    },
  };

  return axios.post(
    `${SPOTIFY_ENDPOINT}/playlists/${props.playlistId}/tracks`,
    data,
    config
  );
};

export const getUserPlaylists = (props: CredentialProps): AxiosPromise => {
  return axios.get(`${SPOTIFY_ENDPOINT}/me/playlists`, {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
      "Content-Type": "application/json",
    },
    params: {
      limit: 10,
    },
  });
};

export const getAllNewReleases = (props: CredentialProps): AxiosPromise => {
  return axios.get(`${SPOTIFY_ENDPOINT}/browse/new-releases`, {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
      "Content-Type": "application/json",
    },
    params: {
      limit: 5,
    },
  });
};

export const getTopUserShows = (props: CredentialProps): AxiosPromise => {
  return axios.get(`${SPOTIFY_ENDPOINT}/me/shows`, {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
      "Content-Type": "application/json",
    },
    params: {
      limit: 5,
    },
  });
};
