import { rest } from "msw";
import { setupServer } from "msw/node";
import { SPOTIFY_ENDPOINT } from "../utils/constants";
import {
  mockUserData,
  mockNewReleaseData,
  mockShowsData,
  mockTrackList,
  mockUserPlaylists,
} from "./mock-data/api-mock-data";

const server = setupServer(
  rest.get(`${SPOTIFY_ENDPOINT}/me`, (request, response, context) => {
    return response(context.json(mockUserData));
  }),
  rest.get(
    `${SPOTIFY_ENDPOINT}/browse/new-releases`,
    (request, response, context) => {
      return response(context.json(mockNewReleaseData));
    }
  ),
  rest.get(`${SPOTIFY_ENDPOINT}/me/shows`, (request, response, context) => {
    return response(context.json(mockShowsData));
  }),
  rest.get(`${SPOTIFY_ENDPOINT}/search`, (request, response, context) => {
    return response(context.json(mockTrackList));
  }),
  rest.get(`${SPOTIFY_ENDPOINT}/me/playlists`, (request, response, context) => {
    return response(context.json(mockUserPlaylists));
  })
);

export { server, rest };
