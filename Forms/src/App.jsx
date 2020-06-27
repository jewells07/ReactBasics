import React, { useState } from 'react';

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    const inputEvent = (event) => {
        // console.log('words ', event.target.value);
        // console.log('words ', event.target.name);
        // console.log('words ', event.target.placeholder);

        const value = event.target.value;
        const name = event.target.name;

        // React setState pervious value
        setFullName((preValue) => {
            // console.log(preValue);
            if (name === 'fname') {
                return {
                    'fname': value,
                    'lname': preValue.lname,
                };
            }else if (name === 'lname') {
                return {
                    'fname': preValue.fname,
                    'lname': value,
                };
            }

        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted');
    }

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname}</h1>
                        <input type="text" placeholder="Enter Your Name" name="fname" onChange={inputEvent} value={fullName.fname} />
                        <input type="text" placeholder="Enter Your Last" name="lname" onChange={inputEvent} value={fullName.lname} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;