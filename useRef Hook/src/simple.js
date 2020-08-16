import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);

  // It will never ever cause our component re-render (It's completely separate from our component render cycle)
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  /**
  If we write this to to update state then it will goto infinity loop by rendering again and again

  const [renderCount, setRenderCount] = useState(0)
  useEffect(()=>{
    setRenderCount(preRenderCount => prevRenderCount +1)
  }) 
  */

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} </div>
      <div>I rendered {renderCount.current} </div>
    </>
  );
};

export default App;
