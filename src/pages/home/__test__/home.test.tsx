import { act, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Home from "..";
import store from "../../../redux/store";
import { getIsLoggedIn } from "../../../redux/credential-slice";
import { getName } from "../../../redux/user-slice";
import { CredentialProps } from "../../../interface/api";
import { fetchUserId } from "../../../api/user-api";
import {
  getAllNewReleases,
  getTopUserShows,
  getUserPlaylists,
} from "../../../api/track-api";
import {
  getNewReleases,
  getUserPlaylist,
  getUserShows,
} from "../../../redux/track-slice";
import { server } from "../../../api/mock-server";

const credentialProps: CredentialProps = {
  token: "token",
  tokenType: "Bearer",
};

const MockHomeScreen = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
};

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("should display all component", async () => {
  store.dispatch(getIsLoggedIn(true));

  render(<MockHomeScreen />);

  const navBar = screen.getByTestId("navbar");
  const loginButton = screen.getByTestId("login_button");
  const sidebar = await screen.findByTestId("sidebar");

  expect(navBar).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
});

test("should display all component when user logged in", async () => {
  store.dispatch(getIsLoggedIn(true));

  render(<MockHomeScreen />);

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getName(response.data.display_name));
    });
    getAllNewReleases(credentialProps).then((response) => {
      store.dispatch(getNewReleases(response.data));
    });
    getTopUserShows(credentialProps).then((response) => {
      store.dispatch(getUserShows(response.data));
    });
    getUserPlaylists(credentialProps).then((response) => {
      store.dispatch(getUserPlaylist(response.data.items));
    });
  });

  const navBar = screen.getByTestId("navbar");
  const loginButton = screen.getByTestId("login_button");
  const sidebar = await screen.findByTestId("sidebar");
  const greeting = await screen.findByTestId("greeting");
  const newReleaseData = store.getState().track.newReleases;
  const userShows = store.getState().track.userShows;
  const userPlaylist = store.getState().track.userPlaylists;

  expect(navBar).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(greeting).toBeInTheDocument();
  expect(newReleaseData).toHaveLength(2);
  expect(userShows).toHaveLength(2);
  expect(userPlaylist).toHaveLength(3);
});
