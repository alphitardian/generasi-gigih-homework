import { screen, render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "..";
import store from "../../../redux/store";

const MockSideBar = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Sidebar keyNav="home" />
      </Provider>
    </BrowserRouter>
  );
};

test("should render all component", async () => {
  render(<MockSideBar />);

  const sidebar = await screen.findByTestId("sidebar");

  expect(sidebar).toBeInTheDocument();
});
