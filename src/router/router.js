import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePlaylist from "../pages/create-playlist";
import Home from "../pages/home";
import { PrivateRoute } from "./private-route";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/create-playlist" component={CreatePlaylist} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
