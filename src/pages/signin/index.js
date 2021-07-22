import React from "react";
import { Button } from "../../components";
import "./style.css";

function SignIn() {
  const apiScope = "playlist-modify-private"
  const redirectURI = "http://localhost:3000/callback"
  const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=${"token"}&redirect_uri=${redirectURI}&scope=${apiScope}`

  return (
    <div className="SignIn">
      <Button 
        name="Sign In" 
        link={linkURL}
      />
    </div>
  )
}

export default SignIn