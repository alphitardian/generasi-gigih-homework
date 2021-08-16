export interface CredentialProps {
  token: string | null;
  tokenType: string | null;
}

export interface SearchProps {
  query: string;
  token: string | null;
  tokenType: string | null;
}

export interface PlaylistProps {
  playlistTitle?: string;
  description?: string;
  selectedUri?: string[];
  token: string | null;
  tokenType: string | null;
  userId?: string;
  playlistId?: string;
}

export interface TrackResponseType {
  uri: string;
  name: string;
  artists: string[];
  album: string[];
}

export interface ImagesResponse {
  height: number;
  url: string;
  width: number;
}

export interface ArtistsResponse {
  id: string;
  uri: string;
  name: string;
  type: string;
}

export interface NewReleaseResponseType {
  uri: string;
  name: string;
  images: ImagesResponse[];
  artists: ArtistsResponse[];
  href: string;
}

export interface ShowsResponseDetailType {
  id: string;
  name: string;
  publisher: string;
  images: ImagesResponse[];
}

export interface ShowsResponse {
  show: ShowsResponseDetailType;
}
