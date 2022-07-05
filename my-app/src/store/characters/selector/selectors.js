export const selectorCharactersState = (state) => state.characters;

export const selectorCharactersIds = (state) =>
  selectorCharactersState(state).ids;

export const selectCharacters = (state) =>
  Object.values(selectorCharactersState(state).entities);
