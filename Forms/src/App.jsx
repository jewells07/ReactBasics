import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const [fullName, setFullName] = useState('');
    const [Password, setPassword] = useState('');

    const inputName = (event) => {
        // console.log('words ', event.target.value);
        setName(event.target.value);
    }

    const inputPass = (event) => {
        setPass(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        setPassword(pass);
    }

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName} {Password}</h1>
                        <input type="text" placeholder="Enter Your Name" onChange={inputName} value={name} />
                        <input type="password" placeholder="Enter Your Password" onChange={inputPass} value={pass} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;