import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // This only call 'slowFunction' only when 'Number' is changed. Before that it was rendering whole component include 'slowFunction' too
  // Shouldn't use useMemo in everything Because of memory efficient, it is using memory to save
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  
  // If we don't use useMemo in themStyles it will called everytime when Number or Theme will changed Because referential equality , It means everytime we run our function we get a New themeStyles object been created even thought it will have exact same value in object but they reference different places in memory
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);
  

  useEffect(() => {
    console.log('Theme Change');
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}

export default App;
