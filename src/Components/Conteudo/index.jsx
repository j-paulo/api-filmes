import React from "react";
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

const Conteudo = ({ filme }) => {
  const images = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6 };
  const imagesMobile = {
    1: imgMobile1,
    2: imgMobile2,
    3: imgMobile3,
    4: imgMobile4,
    5: imgMobile5,
    6: imgMobile6,
  };

  return (
    <>
      <BoxConteudo>
        <Titulo>{filme.title}</Titulo>
        <Texto>{filme.opening_crawl}</Texto>
        <Botao>- Mais infos -</Botao>
      </BoxConteudo>
      <Image className="desk" src={images[filme.episode_id]} alt="" />
      <Image className="mobile" src={imagesMobile[filme.episode_id]} alt="" />
    </>
  );
};

export default Conteudo;
