import React from 'react';
import SlotMach from './SlotMach'

const App = () => {
    return (<>
        <h1 className='heading_style'>
            &#57651; Welcome <span style={{ fontWeight: 'bold' }}>Slot machine Game</span>&#57651;
        </h1>
        <div className="slotmachine">
            <SlotMach x='1' y='1' z='1'/>
            <SlotMach x='2' y='2' z='1'/>
            <SlotMach x='3' y='1' z='1'/>
            <SlotMach x='4' y='4' z='4'/>
        </div>

    </>);
}

export default App;