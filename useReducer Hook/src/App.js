import React, {   useReducer } from 'react';

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

  // Both will Work Independenly even Reducer is Same
  const [data, dispatch] = useReducer(reducer, iState);
  const [data2, dispatch2] = useReducer(reducer, iState);

  const getName = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json)
      .then((res2) => {
        dispatch({ type: 'CHANGE_NAME', payload: res2[0].name });
      });
  };

  return (
    <div className="App">
      <h1>My Name is {data.name} </h1>
      <h2>I Wish TO {data.wish[0]} </h2>
      <button onClick={getName}>Change Name</button>

      <h2>I am {data2.name}</h2>
      <h2>I Wish TO {data2.wish[1]} </h2>
      <button onClick={()=>dispatch2({type: 'CHANGE_NAME', payload : "Hitesh"})}>Change Name 2</button>

    </div>
  );
};

export default App;
