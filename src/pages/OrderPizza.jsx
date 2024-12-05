import React, { useState } from "react";
import styled from "styled-components";
import EkMalzemeler from "../components/EkMalzemeler";
import PizzaBoyut from "../components/PizzaBoyut";
import IsimFormu from "../components/IsimFormu";
import Static from "../components/Static";
import SiparisNotu from "../components/SiparisNotu";
import AdetButton from "../components/AdetButton";
import SiparisCard from "../components/SiparisCard";

function OrderPizza() {
  const Container = styled.div`
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizin: border-box;
  `;
  const ButonToplamContainer = styled.div`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  `;
  const malzemeler = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];
  const [toplamMalzemeFiyat, setToplamMalzemeFiyat] = useState(0);

  const handleMalzemeSecimi = (fiyat) => {
    setToplamMalzemeFiyat(fiyat);
  };
  return (
    <Container>
      <Static />
      <PizzaBoyut />
      <EkMalzemeler
        malzemeler={malzemeler}
        onMalzemeSecildi={handleMalzemeSecimi}
      />
      <IsimFormu />
      <SiparisNotu />
      <ButonToplamContainer>
        <AdetButton />
        <SiparisCard />
      </ButonToplamContainer>
    </Container>
  );
}

export default OrderPizza;
