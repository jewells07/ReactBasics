import { useState, useEffect } from 'react';

function getSaveValue(key, initialValue) {
  const saveValue = JSON.parse(localStorage.getItem(key));
  if (saveValue) return saveValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSaveValue(key, initialValue);
  });

  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
      // eslint-disable-next-line
  }, [value])

  return [value, setValue];
};

export default useLocalStorage;
