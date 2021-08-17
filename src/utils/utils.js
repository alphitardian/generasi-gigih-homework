/* eslint-disable no-use-before-define */
import React from "react";

export const checkImageAvailability = (list) => {
  let image = [];
  if (list.images.length > 0) {
    list.images.forEach((item) => {
      image.push(item.url);
    });
  } else {
    image = "";
  }
  return image;
};

export const filterTrackList = (trackList) => {
  const uriArray = trackList.map((item) => item.uri);
  const filteredArray = trackList.filter(
    ({ uri }, index) => !uriArray.includes(uri, index + 1)
  );
  return filteredArray;
};

export const displayArtistName = (item) => {
  let name = "";

  if (item.length > 1) {
    item.forEach((value) => {
      name += `${value.name} ft. `;
    });
  } else {
    name = item[0].name;
  }

  return name;
};

export const getHashParams = (url) => {
  const hashUrl = url.substr(1);
  const hashComponent = new URLSearchParams(hashUrl);
  return hashComponent;
};

export const showGreeting = (name) => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    return <h1 data-testid="greeting">Good Morning, {name}!</h1>;
  } else if (hours >= 18) {
    return <h1 data-testid="greeting">Good Evening, {name}!</h1>;
  } else if (hours >= 12) {
    return <h1 data-testid="greeting">Good Afternoon, {name}!</h1>;
  }
};
