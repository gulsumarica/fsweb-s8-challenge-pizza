import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

function PizzaBoyut({ pizzaBoyutHamur }) {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");

  function handleBoyutChange(event) {
    setBoyut(event.target.value);
    pizzaBoyutHamur({ boyut: event.target.id, hamur });
  }

  function handleHamurChange(event) {
    setHamur(event.target.value);
    pizzaBoyutHamur({ boyut, hamur: event.target.value });
  }
  return (
    <div>
      <h3>
        Boyut Seç<span style={{ color: "red" }}>*</span>
      </h3>
      <FormGroup check block>
        <Input
          type="radio"
          name="boyut"
          id="kucuk"
          onChange={handleBoyutChange}
        />
        <Label check htmlFor="kucuk">
          Küçük
        </Label>
      </FormGroup>
      <FormGroup check block>
        <Input
          type="radio"
          name="boyut"
          id="orta"
          onChange={handleBoyutChange}
        />
        <Label check htmlFor="orta">
          Orta
        </Label>
      </FormGroup>
      <FormGroup check block>
        <Input
          type="radio"
          name="boyut"
          id="buyuk"
          onChange={handleBoyutChange}
        />
        <Label check htmlFor="buyuk">
          Büyük
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Hamur Kalınlığı</Label>
        <Input
          type="select"
          name="hamur"
          id="hamur"
          value={hamur}
          onChange={handleHamurChange}
        >
          <option value="ince">İnce</option>
          <option value="orta">Orta</option>
          <option value="kalin">Kalın</option>
        </Input>
      </FormGroup>
    </div>
  );
}

export default PizzaBoyut;
