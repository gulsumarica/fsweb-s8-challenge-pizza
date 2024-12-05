import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

function PizzaBoyut({ pizzaBoyutHamur }) {
  const [boyut, setBoyut] = useState("kucuk");
  const [hamur, setHamur] = useState("");

  function handleBoyutChange(event) {
    setBoyut(event.target.value);
    pizzaBoyutHamur({ boyut: event.target.id, hamur });
  }

  function handleHamurChange(event) {
    const selectedHamur = event.target.value;
    setHamur(selectedHamur);
    pizzaBoyutHamur({ boyut, hamur: event.target.value });
  }

  const PizzaBoyut = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Boyut = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
  `;
  const Hamur = styled.div`
    width: 100%;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 1rem;
  `;
  return (
    <PizzaBoyut>
      <Boyut>
        <FormGroup check block>
          <Input
            type="radio"
            name="boyut"
            id="kucuk"
            checked={boyut === "kucuk"}
            value="kucuk"
            onChange={handleBoyutChange}
          />
          <Label style={{ color: "#5F5F5F" }} check htmlFor="kucuk">
            Küçük
          </Label>
        </FormGroup>
        <FormGroup check block>
          <Input
            type="radio"
            name="boyut"
            id="orta"
            checked={boyut === "orta"}
            value="orta"
            onChange={handleBoyutChange}
          />
          <Label style={{ color: "#5F5F5F" }} check htmlFor="orta">
            Orta
          </Label>
        </FormGroup>
        <FormGroup check block>
          <Input
            type="radio"
            name="boyut"
            id="buyuk"
            checked={boyut === "buyuk"}
            value="buyuk"
            onChange={handleBoyutChange}
          />
          <Label style={{ color: "#5F5F5F" }} check htmlFor="buyuk">
            Büyük
          </Label>
        </FormGroup>
      </Boyut>
      <Hamur>
        <FormGroup>
          <Input
            type="select"
            name="hamur"
            id="hamur"
            value={hamur}
            onChange={handleHamurChange}
          >
            <option value="" disabled>
              HAMUR KALINLIĞI
            </option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalin">Kalın</option>
          </Input>
        </FormGroup>
      </Hamur>
    </PizzaBoyut>
  );
}

export default PizzaBoyut;
