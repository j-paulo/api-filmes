import React from "react";
import styled from "styled-components";
import imgLogo from "../../assets/images/star-wars-logo.png";
import imgSwitch from "../../assets/images/stormicon.png";

const StyledHeader = styled.nav`
  text-align: center;
  opacity: 80%;
  position: fixed;
  z-index: 2;
  background-color: ${({ theme }) => theme.headerBg};
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.headerBorder};
  padding: 10px 0;

  @media (max-width: 425px) {
    position: initial;
  }
`;

const Logo = styled.img`
  width: 7%;
  filter: ${({ theme }) => theme.filterImg};

  @media (max-width: 425px) {
    width: 22%;
  }
`;

const Switch = styled.img`
  position: absolute;
  right: 5%;
  top: 32%;
  cursor: pointer;
  opacity: 90%;
  filter: ${({ theme }) => theme.filterIco};

  @media (max-width: 1024px) {
    top: 25%;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 425px) {
    top: 3%;
    width: 25px;
    height: 25px;
  }
`;

const Cabecalho = ({ toggleTema }) => {
  return (
    <StyledHeader>
      <Logo src={imgLogo} alt="Star Wars Movies" title="Star Wars Movies" />
      <Switch src={imgSwitch} onClick={toggleTema} />
    </StyledHeader>
  );
};

export default Cabecalho;
