import React from "react";
import { screen, render, act } from "@testing-library/react";
import Profile from "..";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import { server } from "../../../api/mock-server";
import { getIsLoggedIn } from "../../../redux/credential-slice";
import { fetchUserId } from "../../../api/user-api";
import {
  getCountry,
  getEmail,
  getImageUrl,
  getName,
  getProduct,
} from "../../../redux/user-slice";
import { CredentialProps } from "../../../interface/api";

const credentialProps: CredentialProps = {
  token: "token",
  tokenType: "Bearer",
};

const MockProfileScreen = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );
};

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("should able to display all component", async () => {
  store.dispatch(getIsLoggedIn(true));

  await act(async () => {
    fetchUserId(credentialProps).then((response) => {
      store.dispatch(getName(response.data.display_name));
      store.dispatch(getImageUrl(response.data.images[0].url));
      store.dispatch(getEmail(response.data.email));
      store.dispatch(getCountry(response.data.country));
      store.dispatch(getProduct(response.data.product));
    });
  });

  render(<MockProfileScreen />);

  const navBar = screen.getByTestId("navbar");
  const sidebar = await screen.findByTestId("sidebar");
  const profileImage = screen.getByTestId("profile_image");
  const userName = screen.getByTestId("user_name");
  const userEmail = screen.getByTestId("user_email");
  const userCountry = screen.getByTestId("user_country");
  const userProduct = screen.getByTestId("user_product");

  expect(navBar).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(profileImage).toHaveAttribute("src", store.getState().user.imgUrl);
  expect(userName).toHaveTextContent(store.getState().user.name);
  expect(userEmail).toHaveTextContent(store.getState().user.email);
  expect(userCountry).toHaveTextContent(store.getState().user.country);
  expect(userProduct).toHaveTextContent(store.getState().user.product);
});
