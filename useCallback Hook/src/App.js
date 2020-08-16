import React, { useState, useCallback } from 'react';
import List from './List';

// useCallback => Return Function
// useMemo => Return Value of the Function

const App = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (inc) => {
      return [number + inc, number + inc + 1, number + inc + 2];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;
