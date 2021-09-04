import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Componente principal", () => {
  describe("Quando o site é acessado", () => {
    it("O logo é exibido", () => {
      render(<App />);

      const logo = screen.getByAltText("Filmoteca Star Wars");

      expect(logo).toBeInTheDocument();
    });
    it("O switcher é exibido", () => {
      render(<App />);

      const switcher = screen.getByTestId("switch");

      expect(switcher).toBeInTheDocument();
    });
    it("O texto de boas vindas é exibido", () => {
      render(<App />);

      const texto = screen.getByText("Filmoteca Star Wars");

      expect(texto).toBeInTheDocument();
    });
    it("O loader é exibido", async () => {
      render(<App />);

      const spinner = screen.getByTestId("spinner");

      expect(spinner).toBeInTheDocument();
    });
  });
});
