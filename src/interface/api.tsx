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
