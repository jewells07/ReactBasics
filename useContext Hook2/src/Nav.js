import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav style={{ color: 'red' }}>
      <span>Nav - Jewells</span>{' '}
      <span>List of Movies: {movies.length}</span>
    </nav>
  );
};

export default Nav;
