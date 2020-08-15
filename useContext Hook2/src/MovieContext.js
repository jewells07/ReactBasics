import React, { useState, createContext } from 'react';

const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: 'Rs 100',
      id: 1234,
    },
    {
      name: 'Iron Man',
      price: 'Rs 150',
      id: 1235,
    },
    {
      name: 'Avengers End Game',
      price: 'Rs 200',
      id: 1235,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
