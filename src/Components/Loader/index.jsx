import React from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import styled from "styled-components";

const Spinner = styled(HalfCircleSpinner)`
  margin: 0 auto;
  top: 42%;
  left: 48%;
  position: absolute;

  @media (max-width: 425px) {
    left: 42%;
  }
`;

const Loader = () => {
  return <Spinner />;
};

export default Loader;
