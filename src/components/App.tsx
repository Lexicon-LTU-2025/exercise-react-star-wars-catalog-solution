import { useEffect, useState } from 'react';
import { CharacterInfo } from './CharacterInfo';
import { CharacterList } from './CharacterList';
import { Hero } from './Hero';
import { fetchCharacters, fetchHomeworld } from '../api';
import type { ICharacter, IHomeworld } from '../types';

export const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | undefined>(undefined);
  const [homeworld, setHomeworld] = useState<IHomeworld | undefined>(undefined);
  const [isHomeworldLoading, setIsHomeworldLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  const handleOnCharacterClick = (character: ICharacter) => {
    setSelectedCharacter(characters.find((c) => c.id === character.id));
    setIsHomeworldLoading(true);

    fetchHomeworld(character.homeworld).then((homeworld) => {
      setHomeworld(homeworld);
      setIsHomeworldLoading(false);
    });
  };

  return (
    <div id="app">
      <Hero />
      <main id="main-content">
        <CharacterList characters={characters} onCharacterClick={handleOnCharacterClick} />
        <CharacterInfo
          isHomeWorldLoading={isHomeworldLoading}
          homeworld={homeworld}
          character={selectedCharacter}
        />
      </main>
    </div>
  );
};

export default App;
