import React, { useState } from "react";
import { BoxConteudo, Titulo, Texto, Botao, Image } from "../UI";
import img1 from "../../assets/images/phantommenace.png";
import imgMobile1 from "../../assets/images/phantommenacemobile.jpg";
import img2 from "../../assets/images/attackclones.png";
import imgMobile2 from "../../assets/images/attackclonesmobile.jpg";
import img3 from "../../assets/images/revengesith.png";
import imgMobile3 from "../../assets/images/revengesithmobile.jpg";
import img4 from "../../assets/images/newhope.png";
import imgMobile4 from "../../assets/images/newhopemobile.jpg";
import img5 from "../../assets/images/empirestrikesback.png";
import imgMobile5 from "../../assets/images/empirestrikesbackmobile.jpg";
import img6 from "../../assets/images/returnjedi.png";
import imgMobile6 from "../../assets/images/returnjedimobile.jpg";
import styled from "styled-components";
import { format } from "date-fns";

const BoxInfo = styled(BoxConteudo)`
  left: inherit;
  right: 0;
  width: 25%;
  top: 15%;
  background: ${({ theme }) => theme.infosBg};
  padding: 20px 0 20px 30px;
  opacity: 90%;
  border-radius: 3px;

  @media (max-width: 425px) {
    top: ${(props) => (props.mostrar ? "12%" : "-30%")};
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 100%;
    opacity: 92%;
    background: ${({ theme }) => theme.infosBgMobile};
    overflow: hidden;
    transition: all 0.3s ease-out;
  }
`;

const Infos = styled.span`
  font-weight: bold;
  font-size: 1.2vw;
  line-height: 1.6vw;
  color: ${({ theme }) => theme.infosTxt};

  font {
    font-weight: normal;
    font-size: 1.1vw;
  }

  @media (max-width: 425px) {
    font-size: 5vw;
    line-height: 8vw;

    font {
      font-size: 4.9vw;
    }
  }
`;

const BtnInfo = styled(Botao)`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

const Conteudo = ({ filme }) => {
  const images = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6 };
  const [visible, setVisible] = useState(false);
  const imagesMobile = {
    1: imgMobile1,
    2: imgMobile2,
    3: imgMobile3,
    4: imgMobile4,
    5: imgMobile5,
    6: imgMobile6,
  };

  const formatDate = (data) => {
    const date = new Date(data);
    const dataFormatada = format(date, "dd/MM/yyyy");
    return dataFormatada;
  };

  const showInfos = () => {
    setVisible(!visible);
  };

  return (
    <>
      <BoxConteudo>
        <Titulo>{filme.title}</Titulo>
        <Texto>{filme.opening_crawl}</Texto>
        <BtnInfo onClick={showInfos}>- Mais infos -</BtnInfo>
      </BoxConteudo>
      <BoxInfo mostrar={visible}>
        <Infos>
          Diretor: <font>{filme.director}</font>
        </Infos>
        <br />
        <Infos>
          Produtor: <font>{filme.producer}</font>
        </Infos>
        <br />
        <Infos>
          Data de lançamento: <font>{formatDate(filme.release_date)}</font>
        </Infos>
        <br />
      </BoxInfo>
      <Image className="desk" src={images[filme.episode_id]} alt="" />
      <Image className="mobile" src={imagesMobile[filme.episode_id]} alt="" />
    </>
  );
};

export default Conteudo;
