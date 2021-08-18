import { mockUserPlaylists } from "../../api/mock-data/api-mock-data";
import reducer, {
  getTrackList,
  getSelectedList,
  getSelectedUri,
  getNewReleases,
  getUserShows,
  getUserPlaylist,
  SliceState,
} from "../track-slice";

const mockTrackResponse = {
  uri: "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
  name: "Cut To The Feeling",
  artists: ["Carly Rae Jepsen"],
  album: ["Carly Rae Jepsen"],
};

const mockNewReleasesResponse = {
  uri: "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
  name: "Cut To The Feeling",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
      width: 640,
    },
  ],
  artists: [
    {
      id: "6sFIWsNpZYqfjUpaCgueju",
      name: "Carly Rae Jepsen",
      type: "artist",
      uri: "spotify:artist:6sFIWsNpZYqfjUpaCgueju",
    },
  ],
  href: "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
};

const mockUserShowsResponse = {
  show: {
    id: "4XPl3uEEL9hvqMkoZrzbx5",
    name: "Darknet Diaries",
    publisher: "Jack Rhysider",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/53ba2adaaf2d3e47898aed9edb64026145032e7b",
        width: 640,
      },
    ],
  },
};

const mockUserPlaylistResponse = {
  description: "",
  href: "https://api.spotify.com/v1/playlists/6oGUWCtW8lCN6WSVaa30aZ",
  id: "6oGUWCtW8lCN6WSVaa30aZ",
  images: [
    {
      height: 640,
      url: "https://mosaic.scdn.co/640/ab67616d0000b27363f96ed890a4188b250d2e69ab67616d0000b273b64001fa6292caefc7605550ab67616d0000b273df5022bdf1ac4bf52135c4beab67616d0000b273fac1a31af8bbe683356d4532",
      width: 640,
    },
  ],
  name: "K - P O P",
  owner: {
    display_name: "Ardian Pramudya",
  },
  type: "playlist",
  uri: "spotify:playlist:6oGUWCtW8lCN6WSVaa30aZ",
};

const initialState: SliceState = {
  trackList: [],
  selectedList: [],
  selectedUri: [],
  newReleases: [],
  userShows: [],
  userPlaylists: [],
};

test("should return initial state", () => {
  expect(reducer(undefined, getTrackList([]))).toEqual({
    trackList: [],
    selectedList: [],
    selectedUri: [],
    newReleases: [],
    userShows: [],
    userPlaylists: [],
  });
});

test("should able to add track", () => {
  expect(reducer(initialState, getTrackList([mockTrackResponse]))).toEqual({
    trackList: [
      {
        uri: "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
        name: "Cut To The Feeling",
        artists: ["Carly Rae Jepsen"],
        album: ["Carly Rae Jepsen"],
      },
    ],
    selectedList: [],
    selectedUri: [],
    newReleases: [],
    userShows: [],
    userPlaylists: [],
  });
});

test("should able to add selected track", () => {
  expect(reducer(initialState, getSelectedList([mockTrackResponse]))).toEqual({
    trackList: [],
    selectedList: [
      {
        uri: "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
        name: "Cut To The Feeling",
        artists: ["Carly Rae Jepsen"],
        album: ["Carly Rae Jepsen"],
      },
    ],
    selectedUri: [],
    newReleases: [],
    userShows: [],
    userPlaylists: [],
  });
});

test("should able to add selected uri", () => {
  expect(
    reducer(initialState, getSelectedUri([mockTrackResponse.uri]))
  ).toEqual({
    trackList: [],
    selectedList: [],
    selectedUri: ["spotify:album:0tGPJ0bkWOUmH7MEOR77qc"],
    newReleases: [],
    userShows: [],
    userPlaylists: [],
  });
});

test("should able to add new releases track", () => {
  expect(
    reducer(initialState, getNewReleases([mockNewReleasesResponse]))
  ).toEqual({
    trackList: [],
    selectedList: [],
    selectedUri: [],
    newReleases: [
      {
        uri: "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
        name: "Cut To The Feeling",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
            width: 640,
          },
        ],
        artists: [
          {
            id: "6sFIWsNpZYqfjUpaCgueju",
            name: "Carly Rae Jepsen",
            type: "artist",
            uri: "spotify:artist:6sFIWsNpZYqfjUpaCgueju",
          },
        ],
        href: "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
      },
    ],
    userShows: [],
    userPlaylists: [],
  });
});

test("should able to add user show", () => {
  expect(reducer(initialState, getUserShows([mockUserShowsResponse]))).toEqual({
    trackList: [],
    selectedList: [],
    selectedUri: [],
    newReleases: [],
    userShows: [
      {
        show: {
          id: "4XPl3uEEL9hvqMkoZrzbx5",
          name: "Darknet Diaries",
          publisher: "Jack Rhysider",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/53ba2adaaf2d3e47898aed9edb64026145032e7b",
              width: 640,
            },
          ],
        },
      },
    ],
    userPlaylists: [],
  });
});

test("should able to add user playlist", () => {
  expect(
    reducer(initialState, getUserPlaylist([mockUserPlaylistResponse]))
  ).toEqual({
    trackList: [],
    selectedList: [],
    selectedUri: [],
    newReleases: [],
    userShows: [],
    userPlaylists: [
      {
        description: "",
        href: "https://api.spotify.com/v1/playlists/6oGUWCtW8lCN6WSVaa30aZ",
        id: "6oGUWCtW8lCN6WSVaa30aZ",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27363f96ed890a4188b250d2e69ab67616d0000b273b64001fa6292caefc7605550ab67616d0000b273df5022bdf1ac4bf52135c4beab67616d0000b273fac1a31af8bbe683356d4532",
            width: 640,
          },
        ],
        name: "K - P O P",
        owner: {
          display_name: "Ardian Pramudya",
        },
        type: "playlist",
        uri: "spotify:playlist:6oGUWCtW8lCN6WSVaa30aZ",
      },
    ],
  });
});
