import React from "react";
import styled from "styled-components";
import imgLogo from "../../assets/images/star-wars-logo.png";

const StyledHeader = styled.nav`
  text-align: center;
  opacity: 80%;
  position: fixed;
  z-index: 1;
  background-color: black;
  width: 100%;
  border-bottom: 2px solid gold;
  padding: 10px 0;
`;

const Logo = styled.img`
  width: 7%;
`;

const Titulo = styled.h1`
  font-weight: bold;
  font-size: 2vw;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={imgLogo} alt="Star Wars Movies" />
      {/* <Titulo>Biblioteca de Filmes</Titulo> */}
    </StyledHeader>
  );
};

export default Cabecalho;
