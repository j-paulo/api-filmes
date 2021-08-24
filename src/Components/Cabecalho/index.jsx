import React from "react";
import styled from "styled-components";
import imgLogo from "../../assets/images/star-wars-logo.png";

const StyledHeader = styled.nav`
  text-align: center;
  opacity: 80%;
  position: fixed;
  z-index: 2;
  background-color: black;
  width: 100%;
  border-bottom: 2px solid gold;
  padding: 10px 0;
`;

const Logo = styled.img`
  width: 7%;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={imgLogo} alt="Star Wars Movies" title="Star Wars Movies" />
    </StyledHeader>
  );
};

export default Cabecalho;
