import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const getData = async (url, setData) => {
  const resposta = await api.get(url);
  const data = resposta.data;

  setData(data.results);
};
