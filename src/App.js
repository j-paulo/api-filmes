import React from "react";
import { Reset } from "styled-reset";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Cabecalho />
      <Slider />
    </>
  );
}

export default App;
