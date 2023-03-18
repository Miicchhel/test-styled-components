import styled from "styled-components";

export const Container = styled.div`
  width: 230px;
  height: 300px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: ${({theme}) => theme.inside};
  /* box-shadow: ${({theme}) => theme.shadow}; */
`

export const Box = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Texto = styled.div`
  font-size: ${ (props) => props.size };
  color: ${ (props) => props.cor };
  font-weight: bold;
`

export const Botao = styled.button`
  width: 60%;
  height: 45px;
  border: none;
  font-size: 22px;
  color: #FFFF00;
  font-weight: bold;
  border-radius: 5px;
  background-color: #0057E7;
  cursor: pointer;

  :hover{
    background-color: #0059e7bc;
  }
`