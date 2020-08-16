import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [name, setName] = useState('');

  /**
  const inputRef = useRef();
  const focus = () => {
    // It will give <input value> it same like document.querySelector
    console.log(inputRef.current);
    inputRef.current.focus();
    // we can do this as well
    inputRef.current.value = 'Some Value';
  };

   */

  //  Second Example for Prev Value it is great to use (persist value) , if we use useState we cause re-render
  const prevName = useRef('');
  useEffect(()=>{
    prevName.current = name;
  },[name])

  return (
    <>
      {/* <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name} </div>
      <button onClick={focus}>Focus</button> */}


      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current} </div>
    </>
  );
};

export default App;
