import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

function SiparisNotu() {
  const SiparisNot = styled.h3`
    text-align: left;
  `;
  const SiparisContainer = styled.div`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 5rem;
    margin-top: 1rem;
    border-bottom: 1px solid black;
  `;
  return (
    <SiparisContainer>
      <SiparisNot>Sipariş Notu</SiparisNot>
      <Form>
        <FormGroup>
          <Input
            id="not"
            name="not"
            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
            type="text"
            data-cy="input-not"
            style={{ width: "500px", height: "40px" }}
          ></Input>
        </FormGroup>
      </Form>
    </SiparisContainer>
  );
}

export default SiparisNotu;
