import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const User = () => {
  // Should be same variable name that is passing
  const { fname, lname } = useParams();

  const location = useLocation();

  console.log(location);

  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      <p> My Current Location is {location.pathname}</p>
      {location.pathname === `/user/jewells/joshi` ? (
        <button onClick={()=> alert("You Are Awesome")}> Use got me </button>
      ) : null}
      <h2>Change the name in URL</h2>
    </>
  );
};

export default User;
