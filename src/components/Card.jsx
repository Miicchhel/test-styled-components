import React from "react";
import imageFilter from "../imageFilter"
import { Botao, Box, Container, Texto } from "../UI";

function Card({ nome, preco }) {
  return (
    <Container>
      { imageFilter(nome) }
      <Box>
        <Texto cor={ ({theme}) => theme.text } size="35px">{ nome }</Texto>
        <Texto cor="#aad786" size="20px">R$ { preco.toFixed(2).replace('.', ',') }</Texto>
      </Box>
      <Botao> Comprar </Botao>
    </Container>
  )
}

export default Card