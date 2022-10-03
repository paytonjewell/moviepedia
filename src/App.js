import {useState} from "react";

import TopBar from "./components/TopBar";
import Home from "./components/Home";

export function makeRequest(specs) {
  return `https://api.themoviedb.org/3${specs}?api_key=${process.env.REACT_APP_API_KEY}`;
}

export function makePosterImageUrl(posterPath) {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
}

export function makeBackdropImageUrl(url) {
  return `https://image.tmdb.org/t/p/original${url}`;
}

export function classNames(...names) {
  return names.filter(name => name).join(" ");
}

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
    <TopBar onSearchMovies={setSearchResults}  />
      <Home searchResults={searchResults} />
    </div>
  );
}

export default App;
