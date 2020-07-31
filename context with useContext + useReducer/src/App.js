import React, { useContext, useReducer, createContext } from 'react';

const App = () => {
  const Mycontext = createContext();

  const iState = {
    name: 'Ramesh',
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

  const Coder3 = () => {
    const myname = useContext(Mycontext);
    return (
      <div>
        <h1>I am Coder 3</h1>
        <h2>{myname.name}</h2><button
          onClick={() =>
            myname.dispatch({ type: 'CHANGE_NAME', payload: 'Hitesh' })
          }
        >
          Change Name 3
        </button>
      </div>
    );
  };

  const Coder2 = () => {
    const myname = useContext(Mycontext);
    return (
      <div>
        <h1>I am Coder 2</h1>
        <h2>{myname.name}</h2>
        <button
          onClick={() =>
            myname.dispatch({ type: 'CHANGE_NAME', payload: 'Suresh' })
          }
        >
          Change Name 2
        </button>
        <Coder3 />
      </div>
    );
  };

  const Coder = () => {
    const myname = useContext(Mycontext);
    return (
      <div>
        <h1>I am Coder 1</h1>
        <h2>{myname.name}</h2><button
          onClick={() =>
            myname.dispatch({ type: 'CHANGE_NAME', payload: 'Ramesh' })
          }
        >
          Change Name 1
        </button>
        <Coder2 />
      </div>
    );
  };

  const [data, dispatch] = useReducer(reducer, iState);

  return (
    <Mycontext.Provider value={{ name: data.name, dispatch: dispatch }}>
      <h1>HELLO</h1>
      <Coder />
    </Mycontext.Provider>
  );
};

export default App;
