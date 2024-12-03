import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

function EkMalzemeler({ malzemeler }) {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleCheckbox(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      if (selectedItems.length < 10) {
        setSelectedItems([...selectedItems, item]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    }
  }
  return (
    <div>
      <h3>Ek Malzemeler</h3>
      <p>En fazla 10 malzeme seçebilirsiniz</p>
      <div>
        <Form>
          {malzemeler.map((malzeme, index) => (
            <FormGroup key={index}>
              <Input
                type="checkbox"
                checked={selectedItems.includes(malzeme)}
                onChange={() => handleCheckbox(malzeme)}
              />
              <Label>{malzeme}</Label>
            </FormGroup>
          ))}
        </Form>
      </div>
    </div>
  );
}

export default EkMalzemeler;
