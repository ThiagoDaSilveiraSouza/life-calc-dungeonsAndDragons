import { useState, useRef } from "react";

// services
import { classList } from "./services/classList";

// components
import { Counter } from "./components";

// styles
import {
  Form,
  Label,
  ButtonContainer,
  HitDieContainer,
  AppSection
} from "./AppStyled";

export default function App() {
  const [hitDie, setHitDie] = useState(0);
  const formElement = useRef(null);

  const getFormValues = (formElement) => {
    const { constitution, nivel, className } = formElement.current;
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

  const updateHitDie = () => {
    const formValues = getFormValues(formElement);
    const totalLife = calcTotalLife(formValues);
    setHitDie(totalLife);
  };

  const formSubmitEvent = (event) => {
    event.preventDefault();
    updateHitDie();
  };

  return (
    <AppSection className="App">
      <Form onSubmit={formSubmitEvent} ref={formElement}>
        <HitDieContainer>{hitDie}</HitDieContainer>
        <Label>
          <h3>Class</h3>
          <select name="className" onChange={formSubmitEvent}>
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
          maxNumber={5}
          minimumNumber={-4}
          changeEvent={updateHitDie}
        />
        <Counter
          name="nivel"
          description="nivel"
          maxNumber={20}
          minimumNumber={1}
          initialNumber={1}
          changeEvent={updateHitDie}
        />
      </Form>
    </AppSection>
  );
}
