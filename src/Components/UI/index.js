import styled from "styled-components";

export const BoxConteudo = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  text-align: left;
  z-index: 3;
  width: 50%;

  @media (max-width: 425px) {
    top: 5%;
    width: 88%;
  }
`;

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 2.7vw;
  margin-bottom: 2%;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  @media (max-width: 425px) {
    font-size: 6vw;
    margin-bottom: 4%;
  }
`;

export const Texto = styled.p`
  font-size: 1.4vw;
  line-height: 2vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  padding-top: 15px;

  @media (max-width: 425px) {
    font-size: 4.5vw;
    line-height: 7vw;
  }
`;

export const Botao = styled.button`
  margin: 46px auto 0 auto;
  font-family: "Urbanist", sans-serif;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.button};
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

export const Image = styled.img`
  opacity: 30%;
  filter: ${({ theme }) => theme.filterImg};

  &.desk {
    display: inline-block;
  }
  &.mobile {
    display: none;
  }

  @media (max-width: 425px) {
    &.desk {
      display: none;
    }
    &.mobile {
      display: inline-block;
    }
  }
`;
