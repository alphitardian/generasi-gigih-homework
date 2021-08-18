import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "..";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";

const MockLoginScreen = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
};

test("should able to display all component", () => {
  render(<MockLoginScreen />);

  const navbar = screen.getByTestId("navbar");
  const greeting = screen.getByTestId("greeting");
  const loginButton = screen.getByTestId("login_button_content");
  const image = screen.getByTestId("illustration_img");
  const footer = screen.getByTestId("footer");

  expect(navbar).toBeInTheDocument();
  expect(greeting).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "Music_Isometric.png");
  expect(footer).toBeInTheDocument();
});
