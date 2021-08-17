import axios from "axios";
import { CredentialProps } from "../../interface/api";
import { SPOTIFY_ENDPOINT } from "../../utils/constants";
import { mockUserData } from "../mock-data/api-mock-data";
import { fetchUserId } from "../user-api";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

const credentialProps: CredentialProps = {
  token: "token",
  tokenType: "Bearer",
};

const mockedResponse = {
  data: mockUserData,
  status: 200,
  headers: {},
  config: {},
};

test("should able to get user", async () => {
  mockAxios.get.mockResolvedValueOnce(mockedResponse);

  expect(mockAxios.get).not.toHaveBeenCalled();

  const axiosResponse = await fetchUserId(credentialProps);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: `${credentialProps.tokenType} ${credentialProps.token}`,
    },
  });
  expect(axiosResponse.data).toEqual(mockUserData);
});
