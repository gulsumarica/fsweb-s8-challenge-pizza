import React from "react";
import { Label } from "reactstrap";
import styled from "styled-components";

function Static() {
  const Content = styled.div`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 1rem 0;
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
  const Baslik = styled.div`
    width: 100%;
  `;

  const Basliklar = styled.div`
    display: flex;
    gap: 15rem;
  `;

  return (
    <Content>
      <Label style={{ fontWeight: "bold" }}>Position Absolute Acı Pizza</Label>
      <Detay>
        <Price>85.50$</Price>
        <Degerlendirme>4.9</Degerlendirme>
        <Yorumlar>(200)</Yorumlar>
      </Detay>
      <Aciklama>
        FrontEnd Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir yemektir.. Küçük
        bir pizzaya bazen pizzetta denir.
      </Aciklama>
      <Baslik>
        <Basliklar>
          <Label style={{ fontWeight: "bold" }}>
            Boyut Seç
            <span style={{ color: "red" }}>*</span>
          </Label>
          <Label style={{ fontWeight: "bold" }}>
            Hamur Seç<span style={{ color: "red" }}>*</span>
          </Label>
        </Basliklar>
      </Baslik>
    </Content>
  );
}

export default Static;
