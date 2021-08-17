import axios from "axios";
import {
  CredentialProps,
  PlaylistProps,
  SearchProps,
} from "../../interface/api";
import { SPOTIFY_ENDPOINT } from "../../utils/constants";
import { playlist } from "../../utils/Data";
import {
  mockAddPlaylistTrack,
  mockCreatePlaylistData,
  mockNewReleaseData,
  mockShowsData,
} from "../mock-data/api-mock-data";
import {
  addItemToPlaylist,
  createPlaylist,
  getAllNewReleases,
  searchTrack,
} from "../track-api";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

const credentialProps: CredentialProps = {
  token: "token",
  tokenType: "Bearer",
};

const searchProps: SearchProps = {
  token: "token",
  tokenType: "Bearer",
  query: "query",
};

const playlistProps: PlaylistProps = {
  playlistTitle: "playlist",
  description: "playlist description",
  selectedUri: [
    "spotify:album:5ZX4m5aVSmWQ5iHAPQpT71",
    "spotify:album:0geTzdk2InlqIoB16fW9Nd",
  ],
  token: "token",
  tokenType: "Bearer",
  userId: "1",
  playlistId: "2",
};

const headers = {
  Authorization: `${credentialProps.tokenType} ${credentialProps.token}`,
  "Content-Type": "application/json",
};

const mockedResponse = (data: any) => {
  return {
    data: data,
    status: 200,
    headers: {},
    config: {},
  };
};

test("should able to get new release track", async () => {
  mockAxios.get.mockResolvedValueOnce(mockedResponse(mockNewReleaseData));

  expect(mockAxios.get).not.toHaveBeenCalled();

  const axiosResponse = await getAllNewReleases(credentialProps);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${SPOTIFY_ENDPOINT}/browse/new-releases`,
    {
      headers: headers,
      params: {
        limit: 5,
      },
    }
  );
  expect(axiosResponse.data).toEqual(mockNewReleaseData);
});

test("should able to get user shows", async () => {
  mockAxios.get.mockResolvedValueOnce(mockedResponse(mockShowsData));

  expect(mockAxios.get).not.toHaveBeenCalled();

  const axiosResponse = await getAllNewReleases(credentialProps);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${SPOTIFY_ENDPOINT}/browse/new-releases`,
    {
      headers: headers,
      params: {
        limit: 5,
      },
    }
  );
  expect(axiosResponse.data).toEqual(mockShowsData);
});

test("should able to get tracks", async () => {
  mockAxios.get.mockResolvedValueOnce(mockedResponse(playlist));

  expect(mockAxios.get).not.toHaveBeenCalled();

  const axiosResponse = await searchTrack(searchProps);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(`${SPOTIFY_ENDPOINT}/search`, {
    headers: {
      Authorization: `${searchProps.tokenType} ${searchProps.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      q: searchProps.query,
      type: "album,track,artist",
      limit: 20,
    },
  });
  expect(axiosResponse.data).toEqual(playlist);
});

test("should able to create playlist", async () => {
  mockAxios.post.mockResolvedValueOnce(mockedResponse(mockCreatePlaylistData));

  expect(mockAxios.post).not.toHaveBeenCalled();

  const axiosResponse = await createPlaylist(playlistProps);

  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${SPOTIFY_ENDPOINT}/users/${playlistProps.userId}/playlists`,
    {
      name: playlistProps.playlistTitle,
      public: false,
      collaborative: false,
      description: playlistProps.description,
    },
    {
      headers: {
        Authorization: `${playlistProps.tokenType} ${playlistProps.token}`,
        "Content-Type": "application/json",
      },
    }
  );
  expect(axiosResponse.data).toEqual(mockCreatePlaylistData);
});

test("should able to add track to playlist", async () => {
  mockAxios.post.mockResolvedValueOnce(mockedResponse(mockAddPlaylistTrack));

  expect(mockAxios.post).not.toHaveBeenCalled();

  const axiosResponse = await addItemToPlaylist(playlistProps);

  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${SPOTIFY_ENDPOINT}/playlists/${playlistProps.playlistId}/tracks`,
    {
      uris: playlistProps.selectedUri,
    },
    {
      headers: {
        Authorization: `${playlistProps.tokenType} ${playlistProps.token}`,
        "Content-Type": "application/json",
      },
    }
  );
  expect(axiosResponse.data).toEqual(mockAddPlaylistTrack);
});
