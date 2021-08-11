import { screen, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import NavBar from ".";
import store from "../../redux/store";

test("should display all navbar component when user is not loggedin", () => {
  render(
    <Provider store={store}>
      <NavBar isUserLoggedin={false} imageUrl="" />
    </Provider>
  );
  const navBar = screen.getByTestId("navbar");
  const searchForm = screen.getByTestId("search_form");
  const loginButton = screen.getByTestId("login_button");

  expect(navBar).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test("should display all navbar component when user is loggedin", () => {
  render(
    <Provider store={store}>
      <NavBar
        isUserLoggedin={true}
        imageUrl="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.18169-1/s320x320/12509138_964302483655316_5883528326573638565_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=0c64ff&_nc_ohc=zPHvf2fLcIwAX9LmdWx&_nc_ht=scontent-hkt1-2.xx&oh=4963126929ab74aed8ab9c4e455e4a02&oe=6137B3ED"
      />
    </Provider>
  );
  const navBar = screen.getByTestId("navbar");
  const searchForm = screen.getByTestId("search_form");
  const createPlaylistButton = screen.getByTestId(
    "create_playlist_button_disabled"
  );
  const profileImage = screen.getByTestId("profile_img");

  expect(navBar).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
  expect(createPlaylistButton).toBeInTheDocument();
  expect(profileImage).toBeInTheDocument();
});
