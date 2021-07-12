import Data from './utils/Data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <img className="AlbumImg" src={Data.album.images[0].url} alt="A Music Album Cover" />
        <h1 className="TrackTitleText">{Data.name}</h1>
        <p className="ArtistText">{Data.album.artists[0].name}</p>
        <button className="SelectBtn">Select</button>
      </div>
    </div>
  );
}

export default App;
