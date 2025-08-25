import type { ICharacter } from './types';

export const fetchCharacters = async (): Promise<ICharacter[]> => {
  const res = await fetch('https://swapi.online/api/characters');
  const characters = (await res.json()) as ICharacter[];
  return characters;
};
