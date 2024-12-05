import React, { useEffect, useState } from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

const MalzemelerGrup = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 2rem;
`;

const MalzemeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.8rem;
`;

const FormGroupWrapper = styled(FormGroup)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MalzemeBaslik = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 1rem 0;
  padding: 0 0.5;
`;

function EkMalzemeler({ malzemeler = [], onSelectedMalzemeCount = () => {} }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  function handleCheckbox(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      if (selectedItems.length < 10) {
        setSelectedItems([...selectedItems, item]);
        setErrorMessage("");
      } else {
        setErrorMessage("En fazla 10 malzeme seçebilirsiniz.");
      }
    }
  }
  useEffect(() => {
    onSelectedMalzemeCount(selectedItems.length);
  }, [selectedItems, onSelectedMalzemeCount]);

  return (
    <MalzemelerGrup>
      <MalzemeBaslik>
        <p style={{ fontWeight: "bold" }}>Ek Malzemeler</p>
        <p style={{ color: "#5f5f5f" }}>
          En fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
      </MalzemeBaslik>
      {errorMessage && (
        <FormFeedback style={{ color: "red" }}>{errorMessage}</FormFeedback>
      )}
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
