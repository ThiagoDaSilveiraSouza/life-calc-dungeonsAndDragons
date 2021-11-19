import { useState } from "react";
import styled from "styled-components";
import "./styles.css";

// services
import { classList } from "./services/classList";

// components
import { Counter } from "./components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Label = styled.label`
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
  }
`;

const ButtonContainer = styled.div`
  flex: 1 1 100%;
  button {
    font-size: 30px;
  }
`;

const HitDieContainer = styled.h3`
  flex: 1 1;
  font-size: 30px;
  margin: 0;
  color: white;
  background: green;
`;

export default function App() {
  const [life, setLife] = useState(0);

  const getFormValues = (event) => {
    const { constitution, nivel, className } = event.target;
    const classData = {
      constitution: constitution.value,
      nivel: nivel.value,
      hitDie: className.value
    };

    return classData;
  };

  const calcTotalLife = (classData) => {
    const { constitution, nivel, hitDie } = classData;
    const media = Math.round(hitDie / 2);
    const nivelAbouFirst = nivel - 1;
    const totalLife =
      nivelAbouFirst * media + hitDie * 1 + constitution * nivel;

    return totalLife;
  };

  const formSubmitEvent = (event) => {
    event.preventDefault();
    const formValues = getFormValues(event);
    const totalLife = calcTotalLife(formValues);
    console.log(totalLife);
    setLife(totalLife);
  };

  return (
    <div className="App">
      <Form onSubmit={formSubmitEvent}>
        <Label>
          <h3>Class</h3>
          <select name="className">
            {classList.map(({ name, hitDie }, index) => {
              return (
                <option key={index} value={hitDie}>
                  {name}
                </option>
              );
            })}
          </select>
        </Label>

        <Counter
          name="constitution"
          description="constitution"
          maxNumber="5"
          minimumNumber="-4"
        />
        <Counter
          name="nivel"
          description="nivel"
          maxNumber="20"
          minimumNumber="1"
        />

        <ButtonContainer>
          <button type="input">Calcular</button>
        </ButtonContainer>

        <HitDieContainer>{life}</HitDieContainer>
      </Form>
    </div>
  );
}
