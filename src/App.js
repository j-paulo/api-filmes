import React, { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Slider from "./Components/Slider";
import { ThemeProvider } from "styled-components";
import { darkSideTheme, whiteSideTheme } from "./Components/UI/temas";
import { fetchFilmes } from "./api/api";
import Loader from "./Components/Loader";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

function App() {
  const [tema, setTema] = useState(true);
  const [filmes, setFilmes] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  useEffect(() => {
    let mounted = true;

    const getFilmes = async () => {
      const data = await trackPromise(fetchFilmes());

      if (mounted) setFilmes(data.results);
    };

    getFilmes();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ThemeProvider theme={tema ? whiteSideTheme : darkSideTheme}>
      <Reset />
      <GlobalStyle />
      <Cabecalho toggleTema={toggleTema} />
      {promiseInProgress === true ? (
        <Loader />
      ) : (
        <Slider filmes={filmes} setFilmes={setFilmes} />
      )}
    </ThemeProvider>
  );
}

export default App;
