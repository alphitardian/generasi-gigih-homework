import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import CardContainer from "..";
import { data } from "../../../utils/Data";

const props = {
  imgUrl: data.album.images[0].url,
  altImg: "An image track",
  trackTitle: data.album.name,
  artistName: data.album.artists[0].name,
  btnName: "Select",
  enableBtn: true,
  onClick: () => {
    console.log("button clicked");
  },
};

test("should display all component", () => {
  render(
    <CardContainer
      imgUrl={props.imgUrl}
      altImg={props.altImg}
      trackTitle={props.trackTitle}
      artistName={props.artistName}
      btnName={props.btnName}
      enableBtn={props.enableBtn}
      onClick={props.onClick}
    />
  );

  const trackImg = screen.getByTestId("track_image");
  const trackTitle = screen.getByTestId("track_title");
  const artistName = screen.getByTestId("artist_name");
  const selectButton = screen.getByTestId("select_button");

  expect(trackImg).toBeInTheDocument();
  expect(trackTitle).toBeInTheDocument();
  expect(artistName).toBeInTheDocument();
  expect(selectButton).toBeInTheDocument();
});

test("should not display button", () => {
  render(
    <CardContainer
      imgUrl={props.imgUrl}
      altImg={props.altImg}
      trackTitle={props.trackTitle}
      artistName={props.artistName}
      btnName={props.btnName}
      enableBtn={!props.enableBtn}
      onClick={props.onClick}
    />
  );

  const trackImg = screen.getByTestId("track_image");
  const trackTitle = screen.getByTestId("track_title");
  const artistName = screen.getByTestId("artist_name");

  expect(trackImg).toBeInTheDocument();
  expect(trackTitle).toBeInTheDocument();
  expect(artistName).toBeInTheDocument();
});

test("should display all component and able to click the button", () => {
  render(
    <CardContainer
      imgUrl={props.imgUrl}
      altImg={props.altImg}
      trackTitle={props.trackTitle}
      artistName={props.artistName}
      btnName={props.btnName}
      enableBtn={props.enableBtn}
      onClick={props.onClick}
    />
  );

  const trackImg = screen.getByTestId("track_image");
  const trackTitle = screen.getByTestId("track_title");
  const artistName = screen.getByTestId("artist_name");
  const selectButton = screen.getByTestId("select_button");
  const consoleSpy = jest.spyOn(console, "log");

  expect(trackImg).toBeInTheDocument();
  expect(trackTitle).toBeInTheDocument();
  expect(artistName).toBeInTheDocument();
  expect(selectButton).toBeInTheDocument();

  userEvent.click(selectButton);

  expect(consoleSpy).toHaveBeenCalledWith("button clicked");
});
