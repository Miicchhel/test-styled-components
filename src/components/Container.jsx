import React from 'react'
import styled from 'styled-components';
import lanches from '../data';
import Card from './Card';

const Box = styled.div`
  background-color: ${ ({ theme }) => theme.body };
  min-height: 90vh;
  padding: 2px;
`

function Container(){
  return (
    <Box>
      { lanches.map(({id, nome, preco}) => <Card key={id} nome={ nome } preco={ preco }></Card>) }
    </Box>

  )
}

export default Container;