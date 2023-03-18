import React from "react";
import styled from "styled-components";
import burguer1 from "./assets/burguer1.jpg"
import burguer2 from "./assets/burguer2.webp"
import burguer3 from "./assets/burguer3.webp"

const Imagem = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
`

export default function Img(type){
  const Images = {
    burguer1: <Imagem src={ burguer1 }/>,
    burguer2: <Imagem src={ burguer2 }/>,
    burguer3: <Imagem src={ burguer3 }/>,
  }

  return Images[type] || Images.default;
}