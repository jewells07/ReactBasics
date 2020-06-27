import React, { useState } from 'react';

const App = () => {
    // useState is called a Hook
    const state = useState();
    // console.log(state);


    // useState(initial value) is passing to count and setCount is a fun that will updating and pass it to count
    
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);


    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return (
        <>
            <h1>{ctime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    );
}

export default App;