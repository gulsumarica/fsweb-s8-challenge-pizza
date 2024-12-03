import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const H1 = styled.h1`
  color: black;
`;

function OrderPizza() {
  return (
    <Container>
      <H1>Position Absolute Acı Pizza</H1>
    </Container>
  );
}

export default OrderPizza;
