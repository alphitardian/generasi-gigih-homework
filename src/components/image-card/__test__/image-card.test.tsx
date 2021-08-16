import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "..";
import { data } from "../../../utils/Data";

test("should able to display picture", () => {
  render(<Image source={data.album.images[0].url} alternative="An Image" />);

  const imageCard = screen.getByTestId("track_image");

  expect(imageCard).toBeInTheDocument();
  expect(imageCard).toHaveAttribute("src", data.album.images[0].url);
});
