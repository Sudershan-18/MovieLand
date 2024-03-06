//there is no difference in .js and .jsx file
//but this is a react component so we use .jsx

import React from "react";

//name of file and component is same, this is a good practice
const MovieCard = ({movie}) => {   //we could have used 'props' inside but then we have to rename movie1 to props everywhere
    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
};

export default MovieCard;