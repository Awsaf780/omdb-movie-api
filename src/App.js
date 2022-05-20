import { useEffect, useState } from "react";
// api key - 45e69ea7
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=45e69ea7'

// const movie1 = {
//   "Title": "Marvel One-Shot: All Hail the King",
//   "Year": "2014",
//   "imdbID": "tt3438640",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search);
    console.log(data.Search);
    
  }

  useEffect(() => {
    searchMovies('Marvel')
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search For Movies .."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="search"
        onClick = {() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map( (movie) => (
              <MovieCard movie={movie} />
            ) )}
          </div>
        ) : (
          <div>
            <h2>No Movies Found</h2>
          </div>
        )

      }

      

    </div>
  );
}

export default App;
