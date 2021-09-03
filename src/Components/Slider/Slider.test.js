import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from ".";
import { fetchFilmes } from "../../api/api";

jest.mock("../../api/api");

const mockValues = [
  {
    episode_id: 1,
    title: "teste",
    opening_crawl: "star",
    director: "stevie",
    producer: "Loki",
    release_date: "1977-05-25",
  },
  {
    episode_id: 2,
    title: "new moon",
    opening_crawl: "another",
    director: "samuel",
    producer: "jojo",
    release_date: "1977-05-25",
  },
];

describe("Componente de Slider", () => {
  describe("Quando o componente e montado", () => {
    it("Os botoes de ordenacao sao exibidos apos o conteudo da API ser carregado", async () => {
      fetchFilmes.mockResolvedValue(mockValues);

      render(<Slider />);

      const buttons = await screen.findAllByRole("button", {
        name: /ordem/i,
      });

      expect(buttons).toHaveLength(2);
    });
    it("A lista de filmes e carregada no carousel", async () => {
      fetchFilmes.mockResolvedValue(mockValues);

      const { container } = render(<Slider />);

      expect(await screen.findByText("teste")).toBeInTheDocument();

      expect(container.querySelector("ul.slider").children.length).toBe(3);
    });
  });
});
