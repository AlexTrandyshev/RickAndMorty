const api = {
  characters: "https://rickandmortyapi.com/api/character",
  page: "https://rickandmortyapi.com/api/character/?page=",
};
// const useHttp = () => {};

const getCharacters = async () => {
  const response = await fetch(api.characters);
  const data = await response.json();
  return data.results.map(normalizeCharacters);
};

const getPage = async (numberPage) => {
  const response = await fetch(api.page + numberPage);
  const data = await response.json();
  return data.results.map(normalizeCharacters);
};

const normalizeCharacters = (character) => {
  return {
    id: character.id,
    name: character.name,
    img: character.image,
  };
};

export { getCharacters, getPage };
