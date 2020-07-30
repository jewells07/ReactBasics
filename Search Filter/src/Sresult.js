import React from 'react'

const Sresult = ({name}) => {
    const img = `https://source.unsplash.com/600x400/?${name}`
    return (
        <div>
            <img src={img} alt="not found"/>
        </div>
    )
}

export default Sresult
