import React from "react";
import { render, screen } from "@testing-library/react";
import Conteudo from ".";

describe("Componente de Conteudo dos Filmes", () => {
  it("O snapshot do componente sera sempre o mesmo", () => {
    const filme = {
      title: "teste",
      opening_crawl: "star",
      director: "stevie",
      producer: "Loki",
      release_date: "1977-05-25",
    };

    const { container } = render(<Conteudo filme={filme} />);

    expect(container).toMatchSnapshot();
  });
});
