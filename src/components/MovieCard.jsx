import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
    </div>
  );
};

export default MovieCard;