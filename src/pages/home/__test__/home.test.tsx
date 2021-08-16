import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Home from "..";
import store from "../../../redux/store";

const MockHomeScreen = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
};

test("should display all component", async () => {
  render(<MockHomeScreen />);

  const navBar = screen.getByTestId("navbar");
  const loginButton = screen.getByTestId("login_button");
  const loginAlert = screen.getByText("Please Log In First");
  const sidebar = await screen.findByTestId("sidebar");

  expect(navBar).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(loginAlert).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
});
