import React, { useState } from "react";
import styled from "styled-components";
import EkMalzemeler from "../components/EkMalzemeler";
import PizzaBoyut from "../components/PizzaBoyut";
import IsimFormu from "../components/IsimFormu";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Content = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const H3 = styled.h3`
  color: black;
`;
const Detay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Price = styled.p`
  font-weight: bold;
  flex: 1;
  text-align: left;
`;
const Degerlendirme = styled.p`
  color: #5f5f5f;
  flex: 1;
`;
const Yorumlar = styled.p`
  color: #5f5f5f;
`;
const Aciklama = styled.p`
  color: #5f5f5f;
  text-align: left;
`;
function OrderPizza() {
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
  const [siparis, setSiparis] = useState({ boyut: "", hamur: "" });
  function handleSecimYapildi(secim) {
    setSiparis({ ...siparis, secim });
  }
  const basePrice = 85.5;
  return (
    <>
      <Container>
        <Content>
          <H3>Position Absolute Acı Pizza</H3>
          <Detay>
            <Price>85.50$</Price>
            <Degerlendirme>4.9</Degerlendirme>
            <Yorumlar>(200)</Yorumlar>
          </Detay>
          <Aciklama>
            FrontEnd Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Piza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha nra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          </Aciklama>
          <div>
            <PizzaBoyut />
            <EkMalzemeler malzemeler={malzemeler} />
          </div>
          <div>
            <IsimFormu />
            <h2>Sipariş Notu</h2>
            <input type="Sipariş Notu" />
          </div>
          <div>
            <button>Arttır/Azalt</button>
            <p>Sipariş toplamı form</p>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default OrderPizza;
