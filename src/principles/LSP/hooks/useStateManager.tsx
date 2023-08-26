import { useState } from "react";

export function useStateManager<T>(initialValue : T) {
  const [stateValue, setStateValue] = useState(initialValue);

  const handleState = (value: T) => {
    setStateValue(value);
  };

  return { stateValue, handleState };
}