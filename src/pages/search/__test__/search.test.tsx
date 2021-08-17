import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import SearchScreen from "..";
import store from "../../../redux/store";
import { server } from "../../../api/mock-server";
import { getIsLoggedIn } from "../../../redux/credential-slice";
import { fetchUserId } from "../../../api/user-api";
import { CredentialProps, SearchProps } from "../../../interface/api";
import { getImageUrl } from "../../../redux/user-slice";
import userEvent from "@testing-library/user-event";
import { getTrackList } from "../../../redux/track-slice";
import { searchTrack } from "../../../api/track-api";

const credentialProps: CredentialProps = {
  token: "token",
  tokenType: "Bearer",
};

const searchProps: SearchProps = {
  token: "token",
  tokenType: "Bearer",
  query: "ariana",
};

const MockSearchScreen = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SearchScreen />
      </Provider>
    </BrowserRouter>
  );
};

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("should able to display all component", async () => {
  store.dispatch(getIsLoggedIn(true));

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getImageUrl(response.data.images[0].url));
    });
  });

  render(<MockSearchScreen />);

  const navBar = screen.getByTestId("navbar");
  const sidebar = await screen.findByTestId("sidebar");
  const searchForm = screen.getByTestId("search_form");
  const noDataPlaceholder = screen.getByText("No Data Available");

  expect(navBar).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
  expect(noDataPlaceholder).toBeInTheDocument();
});

test("should able to type input and search track", async () => {
  store.dispatch(getIsLoggedIn(true));

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getImageUrl(response.data.images[0].url));
    });
    searchTrack(searchProps).then((response) => {
      store.dispatch(getTrackList([...response.data.tracks.items]));
    });
  });

  render(<MockSearchScreen />);

  const navBar = screen.getByTestId("navbar");
  const sidebar = await screen.findByTestId("sidebar");
  const searchForm = screen.getByTestId("search_form");

  expect(navBar).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();

  userEvent.type(searchForm, "ariana{enter}");

  const trackResult = store.getState().track.trackList;

  expect(trackResult).toHaveLength(3);
});
