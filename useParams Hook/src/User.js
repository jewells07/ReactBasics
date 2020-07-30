import React from 'react';
import {useParams} from 'react-router-dom'

const User = () => {
    // Should be same variable name that is passing
    const {fname, lname} = useParams();
    
    return (<>
        <h1>
            User {fname} {lname} Page
        </h1>
        <h2>Change the name in URL</h2>
        </> 
    )
}

// const User = ({ match }) => {
//     return (
//         <h1>
//             User { match.params.fname } Page
//         </h1>
//     )
// }

export default User
