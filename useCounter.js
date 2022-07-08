import { useState } from "react";

export const useCounter = (initialValue = 2) => {
  const [counter, setCounter] = useState(initialValue);
//recibe el evento si es que se agrega argumento
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};