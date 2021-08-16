import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "..";
import userEvent from "@testing-library/user-event";

test("should display search form", () => {
  render(<SearchForm />);

  const searchForm = screen.getByTestId("search_form");

  expect(searchForm).toBeInTheDocument();
});

test("should able to type value and handle submit", () => {
  render(<SearchForm handleSubmit={() => console.log("form submitted")} />);

  const searchForm = screen.getByTestId("search_form");
  const consoleSpy = jest.spyOn(console, "log");

  userEvent.type(searchForm, "Blackpink{enter}");

  expect(searchForm).toHaveValue("Blackpink");
  expect(consoleSpy).toHaveBeenCalledWith("form submitted");
});
