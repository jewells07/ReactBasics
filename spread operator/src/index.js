import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'


ReactDOM.render(<App />, document.getElementById('root'));

// 1st case
const fullname = ['jewells', 'joshi'];
const biodata = [1, ...fullname, 21, 'male'];
console.log(fullname);
console.log(biodata);

// 2nd case
var shooterGames = ["Call of Duty", 'Far Cry', 'Resident of evil'];
var racingGames = ['Need For speed', 'Gran Turisom', 'Burnout'];
var Games = [...shooterGames,...racingGames];

console.log(Games);

// 3rd case -> Destructuring
var shooterGames1 = ["Call of Duty", 'Far Cry', 'Resident of evil'];
var [first, ...remaining] = shooterGames1;

console.log(first); // Call of Duty (it same like shooterGames1.first)
console.log(remaining);

const fulname = {
    fname : 'Jewells',
    lname : 'joshi',
};

const bio = {
    id : 1,
    ...fulname,
    age : 21,
    gender : 'male',
};

console.log(bio);
