import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  > h3 {
    flex: 1 1 100%;
    text-transform: uppercase;
    font-size: 30px;
    margin: 0;
  }
`;

const CounterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  input {
    font-weight: bolder;
    user-select: none;
    border: 0;
    font-size: 30px;
    width: 60px;
    text-align: center;
    margin: 0;
    border: none;
    user-select: none;
    pointer-events: none;
    :focus {
      user-select: none;
      border: none;
    }
    :hover {
      user-select: none;
      border: none;
    }
  }
`;

const Arrow = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px 0 gray;
  user-select: none;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }

  :after {
    position: absolute;
    left: ${({ left }) => left};
    content: "";
    width: 15px;
    height: 15px;
    border-top: 4px solid black;
    border-right: 4px solid black;
    transform: rotate(${({ rotate }) => rotate});
  }
`;

export const Counter = ({
  initialNumber = 0,
  maxNumber = 5,
  minimumNumber = 0,
  name = "",
  description = "Counter"
}) => {
  const [counter, setCounter] = useState(initialNumber);

  const addCounter = () => {
    counter < maxNumber && setCounter((counter) => counter + 1);
  };

  const decreaseNumber = () => {
    counter > minimumNumber && setCounter((counter) => counter - 1);
  };

  return (
    <Label>
      <h3>{description}</h3>
      <CounterContent>
        <Arrow rotate="-135deg" left="15px" onClick={decreaseNumber} />
        <input name={name} value={counter} readOnly />
        <Arrow rotate="45deg" left="5px" onClick={addCounter} />
      </CounterContent>
    </Label>
  );
};
