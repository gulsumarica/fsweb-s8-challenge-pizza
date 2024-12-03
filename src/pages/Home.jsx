import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.div`
  background: url("../Assets/Iteration-1-assets/home-banner.png") no-repeat
    center/cover;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: baseline;
`;

const H1 = styled.h1`
  color: white;
  font-size: 3rem;
  width: 25%;
  font-family: Roboto Condensed, sans-serif;
  font-weight: 200;
`;

const Button = styled.button`
  background: #fdc913;
  border-radius: 1.5rem;
  width: 8rem;
  font-size: 0.8rem;
  margin: 2rem;
`;
function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/OrderPizza");
  }
  return (
    <Container>
      <Content>
        <H1>KOD ACIKTIRIR PİZZA, DOYURUR</H1>
        <Button onClick={handleClick}>ACIKTIM</Button>
      </Content>
    </Container>
  );
}

export default Home;
