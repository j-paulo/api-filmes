import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("Componente principal", () => {
  describe("Quando o site e acessado", () => {
    test("O logo e exibido", () => {
      render(<App />);

      const logo = screen.getByAltText("Filmoteca Star Wars");

      expect(logo).toBeInTheDocument();
    });
    it("O switcher e exibido", () => {
      render(<App />);

      const switcher = screen.getByTestId("switch");

      expect(switcher).toBeInTheDocument();
    });
  });
});
