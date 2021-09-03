import React from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  width: 50%;
`;

const Spinner = styled(HalfCircleSpinner)`
  margin: 50px auto 20px auto;
`;

const Loader = () => {
  return (
    <Container data-testid="spinner">
      <Spinner />
      Carregando filmes...
    </Container>
  );
};

export default Loader;
