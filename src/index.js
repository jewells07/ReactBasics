import React from 'react';
import ReactDOM from 'react-dom';
// import myGood, { badBoy, myName ,myNames } from './App';

// ReactDOM.render(
// <>
//   <ol>
//     <li>T</li>
//     <li>{myGood}</li>
//     <li>{badBoy}</li>
//     <li>{myName()}</li>
//     <li>{myNames()}</li>
//   </ol>
// </>, document.getElementById('root'));


// Not Recommended
import * as JJ from './App';

ReactDOM.render(
<>
  <ol>
    <li>HEY</li>
    <li>{ JJ.default }</li>
    <li>{ JJ.badBoy }</li>
    <li>{ JJ.myName() }</li>
    <li>{ JJ.myNames() }</li>
  </ol>
</>, document.getElementById('root'));