import axios from "axios";
import { SPOTIFY_ENDPOINT } from "../utils/constants";

export const fetchUserId = (token, tokenType) => {
  return axios.get(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });
};
