import React from "react";
import { Button } from "../../components";
import axios from "axios";
import "./style.css";

class SignIn extends React.Component {
  state = {
    authToken: "",
  };

  handleClick = async () => {
      try {
        axios.get('https://accounts.spotify.com/authorize?', {
          params: {
              client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
              response_type: "token",
              redirect_uri: "http://localhost:3000/callback",
              scope: "playlist-modify-private"
          }
        })
        .then((response) => {
          this.setState({
            authToken: response.data
          })
          console.log(response);
        })
        
      } catch (error) {
        console.log(error);
      }
  };

  render() {

    const apiScope = "playlist-modify-private"
    const redirectURI = "http://localhost:3000/callback"
    const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=${"token"}&redirect_uri=${redirectURI}&scope=${apiScope}`

    return (
      <div className="SignIn">
        <Button 
          name="Sign In" 
          onClick={this.handleClick} 
          link={linkURL}
        />
      </div>
    );
  }
}

export default SignIn;
