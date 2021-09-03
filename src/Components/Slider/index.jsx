import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import Conteudo from "../Conteudo";
import imgCapa from "../../assets/images/capa.png";
import imgCapaMobile from "../../assets/images/capamobile.jpg";
import { BoxConteudo, Titulo, Texto, Botao, Image } from "../UI";
import { fetchFilmes } from "../../api/api";
import Loader from "../Loader/";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

export const ordencao = { changeOrdem: null };

const Slider = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [filmes, setFilmes] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  ordencao.changeOrdem = (ordem) => {
    let filmesOrdenados = filmes.sort((a, b) => a.episode_id - b.episode_id);

    if (ordem === "lancamento") {
      const metadeFilmes = filmesOrdenados.length / 2;
      const primeirosFilmes = filmesOrdenados.slice(0, metadeFilmes);
      const ultimosFilmes = filmesOrdenados.slice(metadeFilmes);

      filmesOrdenados = [...ultimosFilmes, ...primeirosFilmes];
    }

    setFilmes([...filmesOrdenados]);
    setSelectedItem(selectedItem + 1);
  };

  useEffect(() => {
    let mounted = true;

    const getFilmes = async () => {
      const data = await fetchFilmes();

      if (mounted) setFilmes(data);
    };

    trackPromise(getFilmes());

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Carousel
      dynamicHeight
      showThumbs={false}
      showStatus={false}
      selectedItem={selectedItem}
      onChange={(index) => setSelectedItem(index)}
    >
      <div>
        <BoxConteudo>
          <Titulo>Filmoteca Star Wars</Titulo>
          <Texto>
            Seja bem vindo ao maior acervo de filmes da obra maxima de George
            Lucas!
          </Texto>
          <Texto>
            Aqui voce encontrara tudo sobre uma das maiores franquias do cinema!
          </Texto>
          <Texto>
            Vamos comecar?
            <br />
            Selecione abaixo a ordem em que deseja exibir os filmes:
          </Texto>
          {promiseInProgress === true ? (
            <Loader />
          ) : (
            <>
              <Botao
                onClick={() => ordencao.changeOrdem("cronologica")}
                style={{ marginRight: "25px" }}
              >
                - Ordem Cronologica -
              </Botao>
              <Botao onClick={() => ordencao.changeOrdem("lancamento")}>
                - Ordem de Lancamento -
              </Botao>
            </>
          )}
        </BoxConteudo>
        <Image className="desk" src={imgCapa} alt="" />
        <Image className="mobile" src={imgCapaMobile} alt="" />
      </div>
      {filmes.map((filme, key) => (
        <div key={key}>
          <Conteudo filme={filme} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
