import React, { useEffect, useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://hoblist.com/api/movieList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    })
    .then(response => response.json())
    .then(data => setMovies(data.result))
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Movie List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover mb-4"/>
            <h3 className="text-lg font-bold">{movie.title}</h3>
            <p>{movie.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
