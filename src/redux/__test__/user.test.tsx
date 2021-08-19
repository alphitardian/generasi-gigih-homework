import reducer, {
  getName,
  getEmail,
  getProduct,
  getCountry,
  getImageUrl,
} from "../user-slice";
import { data } from "../../utils/Data";

const initialState = {
  name: "",
  imgUrl: "",
  country: "",
  product: "",
  email: "",
};

test("should return initial state", () => {
  expect(reducer(undefined, getName(""))).toEqual({
    name: "",
    imgUrl: "",
    country: "",
    product: "",
    email: "",
  });
});

test("should able to add name", () => {
  expect(reducer(initialState, getName("Ardian"))).toEqual({
    name: "Ardian",
    imgUrl: "",
    country: "",
    product: "",
    email: "",
  });
});

test("should able to add email", () => {
  expect(reducer(initialState, getEmail("example@gmail.com"))).toEqual({
    name: "",
    imgUrl: "",
    country: "",
    product: "",
    email: "example@gmail.com",
  });
});

test("should able to add product", () => {
  expect(reducer(initialState, getProduct("premium"))).toEqual({
    name: "",
    imgUrl: "",
    country: "",
    product: "premium",
    email: "",
  });
});

test("should able to add country", () => {
  expect(reducer(initialState, getCountry("ID"))).toEqual({
    name: "",
    imgUrl: "",
    country: "ID",
    product: "",
    email: "",
  });
});

test("should able to add image url", () => {
  expect(reducer(initialState, getImageUrl(data.album.images[0].url))).toEqual({
    name: "",
    imgUrl: data.album.images[0].url,
    country: "",
    product: "",
    email: "",
  });
});
