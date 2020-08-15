import React from 'react';
import Nav from './Nav';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';


const App = () => {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovie/>
      </MovieProvider>
    </div>
  );
};

export default App;
