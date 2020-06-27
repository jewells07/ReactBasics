import React, { useState } from 'react';



const App = () => {
    const purple = "#8e44ad";

    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('Jewells');

    const bgChange = () => {
        let newBg = '#344958';
        setBg(newBg);
        setName('Double click it now');
    };

    const doubleClick = () => {
        setBg('yellow');
        setName('Mast hena');
    };

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={bgChange} onDoubleClick={doubleClick}>{name}</button>
            </div>
        </>
    );
}

export default App;