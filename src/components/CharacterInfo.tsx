import type { ReactElement, ReactNode } from 'react';
import type { ICharacter, IHomeworld } from '../types';
import { CharacterDetails } from './CharacterDetails';
import { CharacterHomeworld } from './CharacterHomeworld';
import { Loader } from './Loader';

interface ICharacterProps {
  isHomeWorldLoading: boolean;
  homeworld?: IHomeworld;
  character?: ICharacter;
}

export const CharacterInfo = (props: ICharacterProps): ReactElement => {
  const { isHomeWorldLoading, character, homeworld } = props;

  const renderHomeworld = (): ReactNode => {
    if (isHomeWorldLoading) return <Loader />;
    if (!homeworld) return <p>No homeworld selected..</p>;
    return <CharacterHomeworld homeworld={homeworld} />;
  };

  return (
    <section id="character-info" className="g-card">
      <header>
        <h2>Character Info</h2>
      </header>
      <div className="info-wrapper">
        {!character ? <p>No character selected..</p> : <CharacterDetails character={character} />}
        {renderHomeworld()}
      </div>
    </section>
  );
};
