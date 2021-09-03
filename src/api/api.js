import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const fetchFilmes = async (url = "films") => {
  const resposta = await api.get(url);

  return resposta.data.results;
};
