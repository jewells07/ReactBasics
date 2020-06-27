import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        // console.log('words ', event.target.value);
        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
    }

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;