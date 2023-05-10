import { useState, useEffect } from 'react';

export const useLocalStarage = (key, defaultValue) => {
  // контроль стану
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  // контроль ефекту
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  // повертаємо значення стану
  return [state, setState];
};
