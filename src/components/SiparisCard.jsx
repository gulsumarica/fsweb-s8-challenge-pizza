import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import styled from "styled-components";
import EkMalzemeler from "./EkMalzemeler";

const SiparisStyle = styled.div`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  border: 1px solid WhiteSmoke;
  border-radius: 8px;
  padding: 16px;
  margin: 0;
`;

const Secimler = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const ToplamFiyat = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const ButtonStyle = styled.button`
  width: 100%;
  background-color: #fdc913;
  color: #000;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #fcb103;
  }
`;

export default function SiparisCard({ malzemeler }) {
  const [toplamMalzemeFiyat, setToplamMalzemeFiyat] = useState(0);

  const handleMalzemeSecildi = (value) => {
    setToplamMalzemeFiyat(value);
  };
  return (
    <SiparisStyle>
      <StyledCard>
        <CardBody>
          <CardTitle tag="h5" style={{ textAlign: "left" }}>
            Sipariş Toplam
          </CardTitle>
          <Secimler>
            <CardText>Seçimler</CardText>
            <EkMalzemeler
              malzemeler={malzemeler}
              onMalzemeSecildi={handleMalzemeSecildi}
            />
          </Secimler>
          <ToplamFiyat>
            <CardText>Toplam</CardText>
            <CardText>10</CardText>
          </ToplamFiyat>
        </CardBody>
      </StyledCard>
      <ButtonStyle aria-label="Sipariş Ver">SİPARİŞ VER</ButtonStyle>
    </SiparisStyle>
  );
}
