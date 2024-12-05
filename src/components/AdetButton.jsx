import React, { useState } from "react";
import styled from "styled-components";

export default function AdetButton() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const ButonlarContainer = styled.div`
    width: 100%;
  `;

  const Butonlar = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `;
  const Arttır = styled.button`
    background-color: #fdc913;
  `;
  const Azalt = styled.button`
    background-color: #fdc913;
  `;
  const GuncelMiktar = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    width: 10rem;
    height: 2.2rem;
    border-top: 1px solid WhiteSmoke;
    border-bottom: 1px solid WhiteSmoke;
  `;

  return (
    <ButonlarContainer>
      <Butonlar>
        <Azalt onClick={decrease}>-</Azalt>
        <GuncelMiktar>{count}</GuncelMiktar>
        <Arttır onClick={increase}>+</Arttır>
      </Butonlar>
    </ButonlarContainer>
  );
}
