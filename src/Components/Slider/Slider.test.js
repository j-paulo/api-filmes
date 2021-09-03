import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from ".";
import { fetchFilmes } from "../../api/api";

jest.mock("../../api/api");

const mockValues = [
  {
    episode_id: 1,
    title: "teste",
    opening_crawl: "teste",
    director: "teste",
    producer: "producer",
    release_date: "1977-05-25",
  },
  {
    episode_id: 2,
    title: "teste 2",
    opening_crawl: "teste 2",
    director: "teste 2",
    producer: "producer 2",
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
  });
});
