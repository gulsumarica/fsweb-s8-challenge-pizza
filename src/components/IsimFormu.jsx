import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

function IsimFormu() {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const history = useHistory();

  function handleIsimChange(event) {
    const girilenDeger = event.target.value;
    setIsim(girilenDeger);

    if (girilenDeger.trim().length < 3) {
      setHataMesaji("Girilen isim en az 3 karakter olmalıdır.");
    } else {
      setHataMesaji("");
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!hataMesaji && isim.trim().length >= 3) {
      history.push(`/Success?isim=${isim}`);
    }
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup>
        <Input
          id="isim"
          name="isim"
          placeholder="İsminiz"
          type="text"
          onChange={handleIsimChange}
          value={isim}
          data-cy="input-isim"
          style={{ width: "500px", height: "25px" }}
          invalid={hataMesaji !== ""}
        ></Input>
        {hataMesaji && (
          <FormFeedback style={{ color: "red" }}>{hataMesaji}</FormFeedback>
        )}
      </FormGroup>
    </Form>
  );
}

export default IsimFormu;
