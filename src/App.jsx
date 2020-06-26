import React from 'react';
import { add, sub, div, mult } from './Calc';
function App() {
    return (<>
        <ul>
            <li>Sum of two number is {add(40, 4)}</li>
            <li>Sub of two number is {sub(30, 3)}</li>
            <li>Div of two number is {div(10, 3)}</li>
            <li>Mult of two number is {mult(10, 3)}</li>
        </ul>
    </>);
}
export default App;