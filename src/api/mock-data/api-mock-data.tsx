export const mockUserData = {
  country: "ID",
  display_name: "JM Wizzler",
  email: "email@example.com",
  images: [
    {
      height: null,
      url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg",
      width: null,
    },
  ],
  product: "premium",
  id: "wizzler",
  uri: "spotify:user:wizzler",
};

export const mockNewReleaseData = [
  {
    uri: "spotify:album:5ZX4m5aVSmWQ5iHAPQpT71",
    name: "Runnin",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/e6b635ebe3ef4ba22492f5698a7b5d417f78b88a",
        width: "640",
      },
    ],
    artists: [
      {
        id: "2RdwBSPQiwcmiDo9kixcl8",
        uri: "spotify:artist:2RdwBSPQiwcmiDo9kixcl8",
        name: "Pharrell Williams",
        type: "artist",
      },
    ],
  },
  {
    uri: "spotify:album:0geTzdk2InlqIoB16fW9Nd",
    name: "Sneakin",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/d40e9c3d22bde2fbdb2ecc03cccd7a0e77f42e4c",
        width: "640",
      },
    ],
    artists: [
      {
        id: "3TVXtAsR1Inumwj472S9r4",
        uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
        name: "Drake",
        type: "artist",
      },
    ],
  },
];

export const mockShowsData = [
  {
    show: {
      id: "4XPl3uEEL9hvqMkoZrzbx5",
      name: "Darknet Diaries",
      publisher: "Jack Rhysider",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/53ba2adaaf2d3e47898aed9edb64026145032e7b",
          width: 640,
        },
      ],
    },
  },
  {
    show: {
      id: "1OLcQdw2PFDPG1jo3s0wbp",
      name: "Fest & Flauschig",
      publisher: "Jan Böhmermann & Olli Schulz",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/79364dab39c9d3757838940fc7cb133c75fdaad2",
          width: 640,
        },
      ],
    },
  },
];

export const mockCreatePlaylistData = {
  collaborative: false,
  public: false,
  name: "playlist",
  description: "playlist description",
};

export const mockAddPlaylistTrack = {
  snapshot_id:
    "JbtmHBDBAYu3/bt8BOXKjzKx3i0b6LCa/wVjyl6qQ2Yf6nFXkbmzuEa+ZI/U1yF+",
};

export const mockTrackList = {
  tracks: {
    href: "https://api.spotify.com/v1/search?query=ariana&type=track&offset=0&limit=3",
    items: [
      {
        album: {
          album_type: "single",
          artists: [
            {
              href: "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
              id: "66CXWjxzNUsdJxJ2JdwvnR",
              name: "Ariana Grande",
              type: "artist",
              uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
            },
            {
              href: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
              id: "1uNFoZAHBGtllmzznpCI3s",
              name: "Justin Bieber",
              type: "artist",
              uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
            },
          ],
          href: "https://api.spotify.com/v1/albums/5mUdh6YWnUvf0MfklEk1oi",
          id: "5mUdh6YWnUvf0MfklEk1oi",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2732babb9dbd8f5146112f1bf86",
              width: 640,
            },
          ],
          name: "Stuck with U",
          release_date: "2020-05-08",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:5mUdh6YWnUvf0MfklEk1oi",
        },
        artists: [
          {
            href: "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
            id: "66CXWjxzNUsdJxJ2JdwvnR",
            name: "Ariana Grande",
            type: "artist",
            uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
          },
          {
            href: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
            id: "1uNFoZAHBGtllmzznpCI3s",
            name: "Justin Bieber",
            type: "artist",
            uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
          },
        ],
        disc_number: 1,
        duration_ms: 228482,
        explicit: false,
        external_ids: {
          isrc: "USUM72009644",
        },
        href: "https://api.spotify.com/v1/tracks/4HBZA5flZLE435QTztThqH",
        id: "4HBZA5flZLE435QTztThqH",
        is_local: false,
        name: "Stuck with U (with Justin Bieber)",
        popularity: 84,
        preview_url: null,
        track_number: 1,
        type: "track",
        uri: "spotify:track:4HBZA5flZLE435QTztThqH",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              href: "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
              id: "1Xyo4u8uXC1ZmMpatF05PJ",
              name: "The Weeknd",
              type: "artist",
              uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
            },
            {
              href: "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
              id: "66CXWjxzNUsdJxJ2JdwvnR",
              name: "Ariana Grande",
              type: "artist",
              uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
            },
          ],
          href: "https://api.spotify.com/v1/albums/2fyOpT5c9kxR8zbDh6UtXh",
          id: "2fyOpT5c9kxR8zbDh6UtXh",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273c6af5ffa661a365b77df6ef6",
              width: 640,
            },
          ],
          name: "Save Your Tears (Remix)",
          release_date: "2021-04-23",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:2fyOpT5c9kxR8zbDh6UtXh",
        },
        artists: [
          {
            href: "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
            id: "1Xyo4u8uXC1ZmMpatF05PJ",
            name: "The Weeknd",
            type: "artist",
            uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
          },
          {
            href: "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
            id: "66CXWjxzNUsdJxJ2JdwvnR",
            name: "Ariana Grande",
            type: "artist",
            uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
          },
        ],
        disc_number: 1,
        duration_ms: 191013,
        explicit: false,
        external_ids: {
          isrc: "USUG12101839",
        },
        href: "https://api.spotify.com/v1/tracks/37BZB0z9T8Xu7U3e65qxFy",
        id: "37BZB0z9T8Xu7U3e65qxFy",
        is_local: false,
        name: "Save Your Tears (with Ariana Grande) (Remix)",
        popularity: 94,
        preview_url: null,
        track_number: 1,
        type: "track",
        uri: "spotify:track:37BZB0z9T8Xu7U3e65qxFy",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              href: "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
              id: "66CXWjxzNUsdJxJ2JdwvnR",
              name: "Ariana Grande",
              type: "artist",
              uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
            },
          ],
          href: "https://api.spotify.com/v1/albums/3euz4vS7ezKGnNSwgyvKcd",
          id: "3euz4vS7ezKGnNSwgyvKcd",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605",
              width: 640,
            },
          ],
          name: "Positions",
          release_date: "2020-10-30",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: "spotify:album:3euz4vS7ezKGnNSwgyvKcd",
        },
        artists: [
          {
            href: "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
            id: "66CXWjxzNUsdJxJ2JdwvnR",
            name: "Ariana Grande",
            type: "artist",
            uri: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR",
          },
        ],
        disc_number: 1,
        duration_ms: 173710,
        explicit: true,
        external_ids: {
          isrc: "USUM72020423",
        },

        href: "https://api.spotify.com/v1/tracks/6Im9k8u9iIzKMrmV7BWtlF",
        id: "6Im9k8u9iIzKMrmV7BWtlF",
        is_local: false,
        name: "34+35",
        popularity: 84,
        preview_url: null,
        track_number: 2,
        type: "track",
        uri: "spotify:track:6Im9k8u9iIzKMrmV7BWtlF",
      },
    ],
    limit: 3,
    next: "https://api.spotify.com/v1/search?query=ariana&type=track&offset=3&limit=3",
    offset: 0,
    previous: null,
    total: 6414,
  },
};
