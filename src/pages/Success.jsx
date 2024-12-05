import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

function Success() {
  const SuccessContainer = styled.div`
    background-color: #ce2829;
  `;
  const location = useLocation();
  const useParams = new URLSearchParams(location.search);
  const isim = useParams.get(`isim`);
  return <SuccessContainer>TEBRİKLER {isim}</SuccessContainer>;
}

export default Success;
