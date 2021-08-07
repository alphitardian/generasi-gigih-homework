import axios, { AxiosPromise } from "axios";
import { SPOTIFY_ENDPOINT } from "../utils/constants";
import { CredentialProps } from "../interface/api";

export const fetchUserId = (props: CredentialProps): AxiosPromise => {
  return axios.get(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: `${props.tokenType} ${props.token}`,
    },
  });
};
