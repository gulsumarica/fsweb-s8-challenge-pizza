import React, { useState } from "react";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

function IsimFormu() {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");

  function handleIsimChange(event) {
    const girilenDeger = event.target.value;
    setIsim(girilenDeger);

    if (girilenDeger.trim().length < 3) {
      setHataMesaji("Girilen isim en az 3 karakter olmalıdır.");
    } else {
      setHataMesaji("");
    }
  }
  return (
    <Form>
      <FormGroup>
        <Label>
          <Input type="text" value={isim} onChange={handleIsimChange} />
        </Label>
        {hataMesaji && (
          <FormFeedback style={{ color: "red" }}>{hataMesaji}</FormFeedback>
        )}
      </FormGroup>
    </Form>
  );
}

export default IsimFormu;
