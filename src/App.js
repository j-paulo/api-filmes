import React, { useState } from "react";
import { Reset } from "styled-reset";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Slider from "./Components/Slider";
import { ThemeProvider } from "styled-components";
import { darkSideTheme, whiteSideTheme } from "./Components/UI/temas";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? whiteSideTheme : darkSideTheme}>
      <Reset />
      <GlobalStyle />
      <Cabecalho toggleTema={toggleTema} />
      <Slider />
    </ThemeProvider>
  );
}

export default App;
