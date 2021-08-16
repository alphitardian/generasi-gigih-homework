import reducer, {
  getUserId,
  getToken,
  getTokenType,
  getIsLoggedIn,
} from "../credential-slice";
import { data } from "../../utils/Data";

const initialState = {
  userId: "",
  token: "",
  tokenType: "",
  isLoggedin: false,
};

test("should return initial state", () => {
  expect(reducer(undefined, getUserId(""))).toEqual({
    userId: "",
    token: "",
    tokenType: "",
    isLoggedin: false,
  });
});

test("should able to add user id", () => {
  expect(reducer(initialState, getUserId(data.id))).toEqual({
    userId: data.id,
    token: "",
    tokenType: "",
    isLoggedin: false,
  });
});

test("should able to add token", () => {
  expect(reducer(initialState, getToken("QArpoG4Cl5KjGG9FHiwv"))).toEqual({
    userId: "",
    token: "QArpoG4Cl5KjGG9FHiwv",
    tokenType: "",
    isLoggedin: false,
  });
});

test("should able to add token type", () => {
  expect(reducer(initialState, getTokenType("Bearer"))).toEqual({
    userId: "",
    token: "",
    tokenType: "Bearer",
    isLoggedin: false,
  });
});

test("should able to add log in state", () => {
  expect(reducer(initialState, getIsLoggedIn(true))).toEqual({
    userId: "",
    token: "",
    tokenType: "",
    isLoggedin: true,
  });
});
