import styled from "styled-components";

export const Label = styled.label`
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

export const CounterContent = styled.div`
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

export const Arrow = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 50px;
  font-weight: 800;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 0 3px 0;
  border-radius: 100%;
  :hover {
    transform: scale(1.1);
  }
`;
