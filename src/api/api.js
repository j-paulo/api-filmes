import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const getFilms = async (url, setFilms) => {
  try {
    const resposta = await api.get(url);
    const data = resposta.data;

    setFilms(data.results);
  } catch (error) {
    console.error(error);
  }
};
