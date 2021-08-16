import { screen, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavBar from "..";
import store from "../../../redux/store";
import { data } from "../../../utils/Data";

const MockNavbarComponent = (isLoggedin: boolean, imgUrl: string) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar isUserLoggedin={isLoggedin} imageUrl={imgUrl} />
      </Provider>
    </BrowserRouter>
  );
};

test("should display all navbar component when user is not loggedin", () => {
  render(MockNavbarComponent(false, ""));
  const navBar = screen.getByTestId("navbar");
  const loginButton = screen.getByTestId("login_button");

  expect(navBar).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test("should display all navbar component when user is loggedin", () => {
  render(MockNavbarComponent(true, data.album.images[0].url));
  const navBar = screen.getByTestId("navbar");
  const createPlaylistButton = screen.getByTestId(
    "create_playlist_button_disabled"
  );
  const profileImage = screen.getByTestId("profile_img");

  expect(navBar).toBeInTheDocument();
  expect(createPlaylistButton).toBeInTheDocument();
  expect(profileImage).toBeInTheDocument();
});
