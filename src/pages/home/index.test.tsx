import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import Home from ".";
import store from "../../redux/store";

test("should display all component", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const navBar = screen.getByTestId("navbar");
  const searchForm = screen.getByTestId("search_form");
  const loginButton = screen.getByTestId("login_button");
  const dataPlaceholder = screen.getByText("No Data Available");
  userEvent.click(loginButton);

  expect(navBar).toBeInTheDocument();
  expect(searchForm).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(dataPlaceholder).toBeInTheDocument();
});
