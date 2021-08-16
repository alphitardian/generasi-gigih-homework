import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import PlaylistForm from "..";

test("should display form", () => {
  render(<PlaylistForm />);

  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");

  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});

test("should able to input value and click button", () => {
  render(<PlaylistForm handleSubmit={() => console.log("button clicked")} />);

  const titleInput = screen.getByTestId("title_input");
  const descInput = screen.getByTestId("desc_input");
  const createButton = screen.getByTestId("create_button");
  const consoleSpy = jest.spyOn(console, "log");

  expect(titleInput).toBeInTheDocument();
  expect(descInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();

  userEvent.type(titleInput, "BCL Playlist Song");
  userEvent.type(descInput, "BCL Playlist Song Long Description");
  userEvent.click(createButton);

  expect(titleInput).toHaveValue("BCL Playlist Song");
  expect(descInput).toHaveValue("BCL Playlist Song Long Description");
  expect(consoleSpy).toHaveBeenCalledWith("button clicked");
});
