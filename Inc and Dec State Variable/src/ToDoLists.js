import React, { useState } from 'react';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDoLists = (props) => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('You reached 0 limit');
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}> <AddIcon /> </button>
            <button onClick={decNum}> <DeleteIcon /> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoLists;
