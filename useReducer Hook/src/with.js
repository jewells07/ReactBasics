// With Type and Payload

import React, { useReducer } from 'react';

const App = () => {
  const iState = {
    name: 'Ramesh',
    wish: ['Eat', 'Code', 'Sleep'],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.payload,
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
          dispatch({ type: 'CHANGE_NAME', payload: 'Suresh' });
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
