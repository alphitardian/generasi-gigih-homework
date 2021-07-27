import React from "react";
import { Button } from "../../components";
import { API_SCOPE, REDIRECT_URI } from "../../utils/constants";
import "./style.css";

function SignIn() {
  const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&response_type=${"token"}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;

  return (
    <div className="SignIn">
      <Button name="Sign In" link={linkURL} />
    </div>
  );
}

export default SignIn;
