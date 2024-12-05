import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

function EkMalzemeler({ malzemeler = [], onMalzemeSecildi = () => {} }) {
  // malzemeler props'ına default boş dizi ekliyoruz
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMesage] = useState("");

  function handleCheckbox(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      if (selectedItems.length < 10) {
        setSelectedItems([...selectedItems, item]);
      } else {
        setErrorMesage("En fazla 10 malzeme seçebilirsiniz.");
      }
    }
  }
  useEffect(() => {
    let value = 5 * selectedItems.length;
    onMalzemeSecildi(value);
  }, [selectedItems, onMalzemeSecildi]);

  const MalzemelerGrup = styled.div`
    width: 90%;
    max-width: 500px;
    margin: 2rem;
  `;

  const MalzemeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  `;

  const FormGroupWrapper = styled(FormGroup)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `;

  const ErrorMessage = styled.div`
    color: red;
    font-size: 0.9rem;
    margin: 0.5rem;
    text-align: left;
  `;
  const MalzemeBaslik = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1rem 0;
    padding: 0 0.5;
  `;

  return (
    <MalzemelerGrup>
      <MalzemeBaslik>
        <p style={{ fontWeight: "bold" }}>Ek Malzemeler</p>
        <p style={{ color: "#5f5f5f" }}>
          En fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
      </MalzemeBaslik>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <MalzemeList>
        {malzemeler.map((malzeme, index) => (
          <FormGroupWrapper key={index}>
            <Input
              type="checkbox"
              checked={selectedItems.includes(malzeme)}
              onChange={() => handleCheckbox(malzeme)}
            />
            <Label>{malzeme}</Label>
          </FormGroupWrapper>
        ))}
      </MalzemeList>
    </MalzemelerGrup>
  );
}

export default EkMalzemeler;
