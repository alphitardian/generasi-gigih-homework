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
