import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards'


ReactDOM.render(
    <>
        {/* Custom attribute = Props */}
        <Card
            imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
            title="A Netflix Orignal Series"
            sname="DARK"
            link="https://www.netflix.com/in/title/80100172?source=35"
        />

        <Card
            imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg"
            title="A Netflix Orignal Series"
            sname="Extra curricluar"
            link="https://www.netflix.com/in/title/80990668?source=35"
        />

        <Card
            imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
            title="A Netflix Orignal Series"
            sname="Stranger Things"
            link="https://www.netflix.com/in/title/80057281?source=35"
        />
    </>
    , document.getElementById('root'));