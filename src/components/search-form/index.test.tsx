import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from ".";
import userEvent from "@testing-library/user-event";

test("should display search form", () => {
  render(<SearchForm />);
  const searchForm = screen.getByTestId("search_form");
  expect(searchForm).toBeInTheDocument();
});

test("should able to type value", () => {
  render(<SearchForm />);
  const searchForm = screen.getByTestId("search_form");
  userEvent.type(searchForm, "Blackpink");
  expect(searchForm).toHaveValue("Blackpink");
});
