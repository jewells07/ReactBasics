import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {
  // Should be same variable name that is passing
  const { fname, lname } = useParams();

  // Location is inside of History but History is mutable(Not recommended to use a location via history)
  const history = useHistory();

  const location = useLocation();

  console.log(location);
  console.log(history);

  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      <p> My Current Location is {location.pathname}</p>
      {location.pathname === `/user/jewells/joshi` ? (
        <div>
          <button onClick={() => history.goBack()}>
            {' '}
            Back to page that you visited last{' '}
          </button>
          <button onClick={() => history.push('/')}> Home Page </button>
        </div>
      ) : null}
      <h2>Change the name in URL</h2>
    </>
  );
};

export default User;
