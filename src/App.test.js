import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Componente principal", () => {
  describe("Quando o site e acessado", () => {
    it("O logo e exibido", () => {
      render(<App />);

      const logo = screen.getByAltText("Filmoteca Star Wars");

      expect(logo).toBeInTheDocument();
    });
    it("O switcher e exibido", () => {
      render(<App />);

      const switcher = screen.getByTestId("switch");

      expect(switcher).toBeInTheDocument();
    });
    it("O texto de boas vindas e exibido", () => {
      render(<App />);

      const texto = screen.getByText("Filmoteca Star Wars");

      expect(texto).toBeInTheDocument();
    });
    it("O loader e exibido", async () => {
      render(<App />);

      const spinner = screen.getByTestId("spinner");

      expect(spinner).toBeInTheDocument();
    });
  });
});
