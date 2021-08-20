import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => (props.whiteColor ? "white" : "black")};
        color: ${(props) => (props.whiteColor ? "black" : "white")};
    }
`;
