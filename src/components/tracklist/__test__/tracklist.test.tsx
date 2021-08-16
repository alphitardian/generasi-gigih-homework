import React from "react";
import { render, screen } from "@testing-library/react";
import TrackList from "..";
import { playlist } from "../../../utils/Data";
import CardContainer from "../../card-container";

const MockCardTracks = (): any => {
  return (
    <div>
      {playlist.map((item) => {
        return (
          <CardContainer
            enableBtn={false}
            trackTitle={item.name}
            artistName={item.artists[0].name}
            altImg={item.name}
            imgUrl={item.album.images[0].url}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

test("should display all component", () => {
  render(<TrackList query="" title="Result" list={MockCardTracks()} />);

  const heading = screen.getByText("Result");
  const trackImg = screen.getByAltText(playlist[0].name);
  const trackTitle = screen.getByText(playlist[0].name);
  const artistName = screen.getAllByTestId("artist_name");

  expect(trackImg).toBeInTheDocument();
  expect(trackTitle).toBeInTheDocument();
  expect(artistName).toBeTruthy();
  expect(heading).toBeInTheDocument();
});
