import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CreatePlaylist from "..";
import { server, rest } from "../../../api/mock-server";
import { fetchUserId } from "../../../api/user-api";
import { CredentialProps, PlaylistProps } from "../../../interface/api";
import { getIsLoggedIn } from "../../../redux/credential-slice";
import store from "../../../redux/store";
import { getImageUrl } from "../../../redux/user-slice";
import { SPOTIFY_ENDPOINT } from "../../../utils/constants";

const credentialProps: CredentialProps = {
  token: "token",
  tokenType: "Bearer",
};

const playlistProps: PlaylistProps = {
  playlistTitle: "BCL Playlist Song",
  description: "BCL Playlist Song Long Description",
  selectedUri: [
    "spotify:album:5ZX4m5aVSmWQ5iHAPQpT71",
    "spotify:album:0geTzdk2InlqIoB16fW9Nd",
  ],
  token: "token",
  tokenType: "Bearer",
  userId: "1",
  playlistId: "2",
};

const MockCreatePlaylistScreen = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CreatePlaylist />
      </Provider>
    </BrowserRouter>
  );
};

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("should display all component", async () => {
  store.dispatch(getIsLoggedIn(true));

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getImageUrl(response.data.images[0].url));
    });
  });

  render(<MockCreatePlaylistScreen />);

  const navbar = screen.getByTestId("navbar");
  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");
  const sidebar = await screen.findByTestId("sidebar");

  expect(navbar).toBeInTheDocument();
  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
});

test("should able to input value and submit empty list", async () => {
  store.dispatch(getIsLoggedIn(true));

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getImageUrl(response.data.images[0].url));
    });
  });

  render(<MockCreatePlaylistScreen />);

  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");
  const sidebar = await screen.findByTestId("sidebar");
  const alertSpy = jest.spyOn(window, "alert").mockImplementation();

  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();

  userEvent.type(titleInput, "BCL Playlist Song");
  userEvent.type(descInput, "BCL Playlist Song Long Description");
  userEvent.click(createButton);

  expect(titleInput).toHaveValue("BCL Playlist Song");
  expect(descInput).toHaveValue("BCL Playlist Song Long Description");
  expect(alertSpy).toHaveBeenCalledTimes(1);
});

test("should able to input value and submit list", async () => {
  store.dispatch(getIsLoggedIn(true));

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getImageUrl(response.data.images[0].url));
    });
  });

  render(<MockCreatePlaylistScreen />);

  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");
  const sidebar = await screen.findByTestId("sidebar");
  const alertSpy = jest.spyOn(window, "alert").mockImplementation();

  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();

  server.use(
    rest.post(
      `${SPOTIFY_ENDPOINT}/users/${playlistProps.userId}/playlists`,
      (request, response, context) => {
        return response(
          context.json({
            collaborative: false,
            public: false,
            name: "BCL Playlist Song",
            description: "BCL Playlist Song Long Description",
          })
        );
      }
    ),
    rest.post(
      `${SPOTIFY_ENDPOINT}/playlists/${playlistProps.playlistId}/tracks`,
      (request, response, context) => {
        return response(
          context.json({
            snapshot_id:
              "JbtmHBDBAYu3/bt8BOXKjzKx3i0b6LCa/wVjyl6qQ2Yf6nFXkbmzuEa+ZI/U1yF+",
          })
        );
      }
    )
  );

  userEvent.type(titleInput, "BCL Playlist Song");
  userEvent.type(descInput, "BCL Playlist Song Long Description");
  userEvent.click(createButton);

  expect(titleInput).toHaveValue("BCL Playlist Song");
  expect(descInput).toHaveValue("BCL Playlist Song Long Description");
  expect(alertSpy).toHaveBeenCalledTimes(1);
});
