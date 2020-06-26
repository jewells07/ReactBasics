import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name = "Jewells joshi";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://www.jjblogs.in";

const heading = {
  color: '#fa9191',
  textTransform: 'capitalize',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  backgroundColor: 'black',
  margin: '70px 0',
  fontFamily: '"Josefin Sans", sans-serif'
}

ReactDOM.render(<>
  <h1 style={ heading }> {`My name is ${name}`}</h1>

  <div className="img_div">
    <img src={img1} alt="random img che bhai" />
    <img src={img2} alt="random img che bhai" />
    <a href={link} target="_kuchbhi">
      <img src={img3} alt="random img che bhai" />
    </a>
  </div>
</>, document.getElementById('root'));