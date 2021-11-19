import { useState, useCallback, useEffect } from "react";

// styles
import { Label, CounterContent, Arrow } from "./CounterStyle";

export const Counter = ({
  initialNumber = 0,
  maxNumber = 5,
  minimumNumber = 0,
  name = "",
  description = "Counter",
  changeEvent = () => {}
}) => {
  const [counter, setCounter] = useState(initialNumber);

  const addCounter = () => {
    counter < maxNumber && setCounter((counter) => counter + 1);
  };

  const decreaseNumber = () => {
    counter > minimumNumber && setCounter((counter) => counter - 1);
  };

  const updateHitDie = useCallback(() => {
    changeEvent();
  }, [changeEvent]);

  useEffect(() => {
    updateHitDie();
  }, [updateHitDie, counter]);

  return (
    <Label>
      <h3>{description}</h3>
      <CounterContent>
        <Arrow onClick={decreaseNumber}>-</Arrow>
        <input name={name} value={counter} readOnly />
        <Arrow onClick={addCounter}>+</Arrow>
      </CounterContent>
    </Label>
  );
};
