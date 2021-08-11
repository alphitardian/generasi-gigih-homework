import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import CreatePlaylist from ".";
import store from "../../redux/store";

test("should display all component", () => {
  render(
    <Provider store={store}>
      <CreatePlaylist />
    </Provider>
  );

  const navbar = screen.getByTestId("navbar");
  const logoutButton = screen.getByTestId("logout_button");
  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");

  expect(navbar).toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();
  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});

test("should able to input value", () => {
  render(
    <Provider store={store}>
      <CreatePlaylist />
    </Provider>
  );

  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");

  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();

  userEvent.type(titleInput, "BCL Playlist Song");
  userEvent.type(descInput, "BCL Playlist Song Long Description");

  expect(titleInput).toHaveValue("BCL Playlist Song");
  expect(descInput).toHaveValue("BCL Playlist Song Long Description");
});
