import React, { useState } from 'react';

const App = () => {
    // useState is called a Hook
    const state = useState();
    // console.log(state);


    // useState(initial value) is passing to count and setCount is a fun that will updating and pass it to count
    const [count, setCount] = useState(0);


    const IncNum = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    );
}

export default App;