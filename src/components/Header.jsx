import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
const HeaderStyle = styled.header`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 2rem 1rem; /* Üst ve alt padding artırıldı */
  background-color: #ce2829;
  color: white;
  font-size: 2rem;
  text-align: center;
  font-family: Roboto Condensed, sans-serif;
  margin: 0;
  box-sizing: border-box;
  z-index: 10;
`;
const Yonerge = styled.div`
  margin-top: 1rem;
  margin-right: 14rem;
  font-size: 1.2rem;
  font-weight: 400;
`;

function Header({ location }) {
  return (
    <HeaderStyle>
      Teknolojik Yemekler
      {location.pathname === "/OrderPizza" && (
        <Yonerge>Anasayfa - Seçenekler - Sipariş Oluştur</Yonerge>
      )}
    </HeaderStyle>
  );
}

export default withRouter(Header);
