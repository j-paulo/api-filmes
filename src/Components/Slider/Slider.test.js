import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Slider, { ordencao } from ".";
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
  {
    episode_id: 3,
    title: "imperio",
    opening_crawl: "de volta",
    director: "richard",
    producer: "alamo",
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

      expect(container.querySelector("ul.slider").children.length).toBe(4);
    });
  });
  describe("Quando eu clico no botao", () => {
    it("a funcao de ordenacao e executada", async () => {
      fetchFilmes.mockResolvedValue(mockValues);

      render(<Slider />);

      const button = await screen.findByRole("button", {
        name: /ordem cronologica/i,
      });

      const changeOrdem = jest.spyOn(ordencao, "changeOrdem");

      fireEvent.click(button);

      expect(changeOrdem).toHaveBeenCalled();
    });
    it("o carousel vai para o primeiro item", async () => {
      fetchFilmes.mockResolvedValue(mockValues);

      const { container } = render(<Slider />);

      const button = await screen.findByRole("button", {
        name: /ordem cronologica/i,
      });

      fireEvent.click(button);

      const itemContent = container.querySelector("li.slide.selected h1");

      expect(itemContent).toHaveTextContent("test");
    });

    describe("por ordem de lancamento", () => {
      it("os filmes sao ordenados por lancamento", async () => {
        fetchFilmes.mockResolvedValue(mockValues);

        const { container } = render(<Slider />);

        const button = await screen.findByRole("button", {
          name: /ordem de lancamento/i,
        });

        fireEvent.click(button);

        expect(container).toMatchSnapshot();
      });
    });
    describe("por ordem cronologica", () => {
      it("os filmes sao ordenados por ordem cronologica", async () => {
        fetchFilmes.mockResolvedValue(mockValues);

        const { container } = render(<Slider />);

        const button = await screen.findByRole("button", {
          name: /ordem cronologica/i,
        });

        fireEvent.click(button);

        expect(container).toMatchSnapshot();
      });
    });
  });
});
