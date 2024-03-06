import React from "react";
import { useEffect, useState } from "react";

import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";

// 6ec02c5f

const API_URL = 'https://www.omdbapi.com?apikey=6ec02c5f';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    //async: asynchronous data,  means that it takes some time to fetch it
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);

    };

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/*since want to change the value so we use a function, onChange */}
                <img 
                    src={searchIcon} 
                    alt="Search" 
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {/*div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>*/}

            {movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
            {/* we have to pass 'movie={movie}' as a props to MovieCard which is in other .jsx file */}

            {/* <div className="container">
                <MovieCard movie1={movie1} />
            </div> */}
            {/*inside it we used props, but we renamed it to movie1 */}

        </div>
    )
};

export default App;