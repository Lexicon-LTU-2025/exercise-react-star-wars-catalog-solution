import type { ReactElement } from 'react';
import type { ICharacter, IHomeworld } from '../types';
import { CharacterDetails } from './CharacterDetails';
import { CharacterHomeworld } from './CharacterHomeworld';

interface ICharacterProps {
  isLoading: boolean;
  homeworld?: IHomeworld;
  character?: ICharacter;
}

export const CharacterInfo = (props: ICharacterProps): ReactElement => {
  const { isLoading, character, homeworld } = props;

  return (
    <section id="character-info" className="g-card">
      <header>
        <h2>Character Info</h2>
      </header>
      <div className="info-wrapper">
        <CharacterDetails character={character} />
        <CharacterHomeworld homeworld={homeworld} isLoading={isLoading} />
      </div>
    </section>
  );
};
