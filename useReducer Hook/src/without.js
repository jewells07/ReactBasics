// Just for understanding Without Type and Payload

import React, { useReducer } from 'react';

const App = () => {
  const iState = {
    name: 'Ramesh',
    wish: ['Eat', 'Code', 'Sleep'],
  };

  const reducer = (state, action) => {
    switch (action) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: 'Suresh',
        };

      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, iState);

  return (
    <div className="App">
      <h1>My Name is {data.name} </h1>
      <h2>I Wish TO {data.wish[0]} </h2>

      <button
        onClick={() => {
          dispatch('CHANGE_NAME');
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
