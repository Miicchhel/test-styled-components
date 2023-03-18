import React from "react";
import styled from 'styled-components';

const H1Styled = styled.h1`
  color: ${ (props) => props.cor ? props.cor:'green' };

  :hover {
    background-color: #ff00008b;
  }
`

function Teste01({ children }) {
  return (
    <>
      <H1Styled cor="red"> primeiro h1 </H1Styled>
      <H1Styled cor="blue"> segundo h1 </H1Styled>
      <H1Styled> { children } </H1Styled>
    </>
  );
}

export default Teste01;

