import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import imgCapa from "../../assets/images/capa.png";
import img1 from "../../assets/images/newhope.png";
import img2 from "../../assets/images/empirestrikesback.png";
import img3 from "../../assets/images/returnjedi.png";
import img4 from "../../assets/images/phantommenace.png";
import img5 from "../../assets/images/attackclones.png";
import img6 from "../../assets/images/revengesith.png";
import styled from "styled-components";
import { getData } from "../../api/api";

// const StyledCarousel = styled(Carousel)`
//   top: 0;
//   position: relative;
// `;

const Container = styled.div``;

const BoxConteudo = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  text-align: left;
  z-index: 3;
  width: 50%;

  @media (max-width: 425px) {
    top: 10%;
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
  margin-bottom: 5%;
  text-transform: uppercase;
  font-family: "Urbanist", sans-serif;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  @media (max-width: 425px) {
    font-size: 6vw;
    margin-bottom: 8%;
  }
`;

const Texto = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 1.4vw;
  line-height: 2vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  @media (max-width: 425px) {
    font-size: 4.5vw;
    line-height: 7vw;
  }
`;

const Botao = styled.button`
  margin: 46px auto 0px auto;
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
`;

const Slider = () => {
  const [filmes, setFilmes] = useState([]);
  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    getData("films", setFilmes);
  }, []);

  return (
    <Container>
      <Carousel dynamicHeight animationHandler="fade" showThumbs={false}>
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
              Navegue
            </Texto>
            <Botao>Acessar</Botao>
          </BoxConteudo>
          <Image src={imgCapa} alt="" />
        </div>
        {filmes.map((filme, key) => (
          <div key={key}>
            <BoxConteudo>
              <Titulo>{filme.title}</Titulo>
              <Texto>{filme.opening_crawl}</Texto>
            </BoxConteudo>
            <Image src={images[key]} alt="" />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
