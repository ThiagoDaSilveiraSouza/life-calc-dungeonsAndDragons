import styled from "styled-components";

export const AppSection = styled.section`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h3 {
    flex: 1 1 100%;
    text-transform: uppercase;
    font-size: 30px;
    margin: 0;
  }
  select {
    font-weight: bolder;
    font-size: 30px;
    text-align: center;
    margin: 0;
    padding: 20px;
  }
`;

export const HitDieContainer = styled.h3`
  flex: 1 1 100%;
  font-size: 30px;
  margin: 0;
  color: white;
  background: green;
`;
