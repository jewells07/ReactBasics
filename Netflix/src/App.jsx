import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';


const favSeries = "Amazon"

const FavS = () => {
    if (favSeries === "netflix") {
        return <Netflix />;
    } 
    
    else {
        return <Amazon />;
    }
};

const App = () => (
    <>
        <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
        <FavS />
    </>
);



// Ternary Operator
// const App = () => (
//     <>
//         <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
//         { (favSeries === "netflix")? <Netflix /> : <Amazon /> }
//     </>
// );

export default App;