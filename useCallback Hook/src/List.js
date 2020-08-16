import React, { useEffect, useState } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  // If we don't use useCallback, it will also run when theme change same like useMemo
  useEffect(() => {
    setItems(getItems(5));
    console.log('Updating Items');
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
