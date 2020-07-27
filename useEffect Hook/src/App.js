import React, { useState, useEffect } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert('I am Already Clicked');

    // ([] => Empty )It will run when component is render, [num] => It will run whenever num is change

    // Below comment will get rid of warning

    // eslint-disable-next-line
  }, [num]);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Click Me {num} </button>
      <br /> 
      <button onClick={() => setNums(nums + 1)}>Click Me {nums} </button>
    </> 
  );
};

export default App;
