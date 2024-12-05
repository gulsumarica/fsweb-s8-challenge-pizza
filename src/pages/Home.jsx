import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.div`
  background: url("../Assets/Iteration-1-assets/home-banner.png") no-repeat
    center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const Content = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const H1 = styled.h1`
  color: white;
  font-size: 3rem;
  width: 60%;
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
