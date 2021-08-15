/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePlaylist from "../pages/create-playlist";
import Home from "../pages/home";
import SearchScreen from "../pages/search";
import { PrivateRoute } from "./private-route";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/search" component={SearchScreen} />
        <PrivateRoute path="/create-playlist" component={CreatePlaylist} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
