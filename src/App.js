import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ChangeTema from "./components/ChangeTema.jsx";

// import LoginForm from "./components/LoginForm.jsx";
// import Teste01 from "./components/Teste01.jsx";

import Container from "./components/Container.jsx";
import { temaClaro, temaEscuro } from "./UI/temas.js";

import styled from "styled-components";
import { Botao } from "../src/UI";
import { GlobalStyle } from "./GlobalStyle.js";

const BotaoTema = styled(Botao)`
  width: 100px;
  height: 45px;
  position: fixed;
  right: 0px;
  cursor: pointer;
`

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema((tema) => !tema)
  };

  return (
    // <Teste01>oi</Teste01>
    // <LoginForm></LoginForm>
    <ThemeProvider theme={ tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BotaoTema onClick={ toggleTema }>
        <ChangeTema tema={ tema } />
      </BotaoTema>
      <Container />
    </ThemeProvider>
  );
}

export default App;
