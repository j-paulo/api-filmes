import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import imgCapa from "../../assets/images/capa.png";
import img1 from "../../assets/images/phantommenace.png";
import img2 from "../../assets/images/attackclones.png";
import img3 from "../../assets/images/revengesith.png";
import img4 from "../../assets/images/newhope.png";
import img5 from "../../assets/images/empirestrikesback.png";
import img6 from "../../assets/images/returnjedi.png";
import styled from "styled-components";
import { getData } from "../../api/api";

const Container = styled.div``;

const BoxConteudo = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  text-align: left;
  z-index: 3;
  width: 50%;

  @media (max-width: 425px) {
    top: 8%;
    width: 88%;
  }
`;

const Image = styled.img`
  opacity: 20%;
  filter: ${({ theme }) => theme.filterImg};

  @media (max-width: 425px) {
    height: 480px;
    opacity: 15%;
  }
`;

const Titulo = styled.h1`
  font-weight: bold;
  font-size: 2.7vw;
  margin-bottom: 2%;
  text-transform: uppercase;
  font-family: "Urbanist", sans-serif;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  @media (max-width: 425px) {
    font-size: 6vw;
    margin-bottom: 4%;
  }
`;

const Texto = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 1.4vw;
  line-height: 2vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  padding-top: 15px;

  @media (max-width: 425px) {
    font-size: 4.5vw;
    line-height: 7vw;
  }
`;

const Botao = styled.button`
  margin: 46px auto 0 auto;
  font-family: "Urbanist", sans-serif;
  border-radius: 20px;
  background-color: gold;
  border: none;
  color: black;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  padding: 8px 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin: 26px auto 0 auto;
  }
`;

const Slider = () => {
  const [filmes, setFilmes] = useState([]);
  const images = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6 };

  const changeOrdem = (ordem) => {
    let filmesOrdenados = filmes.sort((a, b) => a.episode_id - b.episode_id);

    if (ordem === "lancamento") {
      const metadeFilmes = filmesOrdenados.length / 2;
      const primeirosFilmes = filmesOrdenados.slice(0, metadeFilmes);
      const ultimosFilmes = filmesOrdenados.slice(metadeFilmes);

      filmesOrdenados = [...ultimosFilmes, ...primeirosFilmes];
    }

    setFilmes([...filmesOrdenados]);
    console.log(filmesOrdenados);
  };

  useEffect(() => {
    getData("films", setFilmes);
  }, []);

  return (
    <Container>
      <Carousel dynamicHeight showThumbs={false} showStatus={false}>
        <div>
          <BoxConteudo>
            <Titulo>Filmoteca Star Wars</Titulo>
            <Texto>
              Seja bem vindo ao maior acervo de filmes da obra maxima de George
              Lucas!
            </Texto>
            <Texto>
              Aqui voce encontrara tudo sobre uma das maiores franquias do
              cinema!
            </Texto>
            <Texto>
              Vamos comecar?
              <br />
              Selecione abaixo a ordem em que deseja exibir os filmes:
            </Texto>
            <Botao
              onClick={() => changeOrdem("cronologica")}
              style={{ marginRight: "25px" }}
            >
              - Ordem Cronologica -
            </Botao>
            <Botao onClick={() => changeOrdem("lancamento")}>
              - Ordem de Lancamento-
            </Botao>
          </BoxConteudo>
          <Image src={imgCapa} alt="" />
        </div>
        {filmes.map((filme, key) => (
          <div key={key}>
            <BoxConteudo>
              <Titulo>{filme.title}</Titulo>
              <Texto>{filme.opening_crawl}</Texto>
            </BoxConteudo>
            <Image src={images[filme.episode_id]} alt="" />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
